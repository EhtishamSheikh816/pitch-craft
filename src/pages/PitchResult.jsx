import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { RotateCw, Save, Download, ArrowLeft, Palette } from "lucide-react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { db, auth } from "../config/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import toast from "react-hot-toast";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

const PitchResult = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [pitch, setPitch] = useState(state?.pitch || null);
  const [loading, setLoading] = useState(false);
  const ideaData = state?.ideaData;

  if (!pitch)
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-300 px-4 text-center">
        <p>No pitch data found.</p>
      </div>
    );

  // 🔁 Regenerate Pitch
  const regenerate = async () => {
    if (!ideaData) return;
    setLoading(true);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt = `
You are a startup pitch generator AI.
Generate a startup pitch strictly in JSON format.

Title: ${ideaData.title}
Description: ${ideaData.description}

Return ONLY this JSON:
{
  "name": "string",
  "tagline": "string",
  "elevator_pitch": "string",
  "problem": "string",
  "solution": "string",
  "uvp": "string",
  "logo_concept": "string"
}
`;

      const result = await model.generateContent(prompt);
      const text =
        result.response.candidates?.[0]?.content?.parts?.[0]?.text || "";

      const cleaned = text.match(/{[\s\S]*}/)?.[0];
      if (!cleaned) throw new Error("Invalid JSON format");

      const parsed = JSON.parse(cleaned);
      setPitch(parsed);
      toast.success("Pitch regenerated successfully!");
    } catch (error) {
      console.error("❌ Regenerate Error:", error);
      toast.error("Something went wrong while regenerating the pitch.");
    } finally {
      setLoading(false);
    }
  };

  // 💾 Save Pitch to Firebase
  const savePitch = async () => {
    const user = auth.currentUser;
    if (!user) {
      toast.error("Please log in to save your pitch!");
      return;
    }

    try {
      await addDoc(collection(db, "pitches"), {
        userId: user.uid,
        name: pitch.name,
        tagline: pitch.tagline,
        elevator_pitch: pitch.elevator_pitch,
        problem: pitch.problem,
        solution: pitch.solution,
        uvp: pitch.uvp,
        logo_concept: pitch.logo_concept,
        createdAt: serverTimestamp(),
      });

      toast.success("Pitch saved successfully!");
    } catch (err) {
      console.error("Firebase Save Error:", err);
      toast.error("Failed to save pitch.");
    }
  };

  // 📥 Download JSON
  const downloadJSON = () => {
    const blob = new Blob([JSON.stringify(pitch, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${pitch.name || "pitch"}.json`;
    a.click();
    toast("Pitch downloaded as JSON!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0f1f] via-[#111827] to-[#020617] text-white px-4 sm:px-6 md:px-10 py-8 md:py-24 flex flex-col items-center">
      {/* 🔹 Top Bar */}
      <div className="w-full max-w-6xl flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-300 hover:text-white transition self-start"
        >
          <ArrowLeft size={18} /> <span>Back</span>
        </button>

        <div className="flex flex-wrap justify-center sm:justify-end gap-3">
          <button
            onClick={regenerate}
            disabled={loading}
            className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:opacity-90 rounded-lg px-4 py-2 flex items-center justify-center gap-2 text-sm sm:text-base transition w-full sm:w-auto"
          >
            <RotateCw size={16} />
            {loading ? "Regenerating..." : "Regenerate"}
          </button>

          <button
            onClick={savePitch}
            className="bg-blue-800/30 border border-blue-700 rounded-lg px-4 py-2 hover:bg-blue-700/40 flex items-center justify-center gap-2 text-sm sm:text-base transition w-full sm:w-auto"
          >
            <Save size={16} /> Save Pitch
          </button>

          <button
            onClick={downloadJSON}
            className="bg-purple-600 hover:bg-purple-700 rounded-lg px-4 py-2 flex items-center justify-center gap-2 text-sm sm:text-base transition w-full sm:w-auto"
          >
            <Download size={16} /> Download JSON
          </button>
        </div>
      </div>

      {/* 🟦 Themed Pitch Card */}
      <div className="w-full max-w-6xl bg-gradient-to-br from-[#1e293b] via-[#0f172a] to-[#1e1b4b] rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 space-y-6 border border-blue-800/40 transition-all duration-300 hover:shadow-blue-900/30">
        {/* Header */}
        <div className="text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 text-blue-400 break-words">
            {pitch.name}
          </h1>
          <p className="text-base sm:text-lg text-purple-400 font-medium break-words">
            {pitch.tagline}
          </p>
        </div>

        {/* Elevator Pitch */}
        <div className="border-l-4 border-purple-600 pl-3 sm:pl-4">
          <h2 className="font-semibold text-lg mb-1 text-white/90">
            Elevator Pitch
          </h2>
          <p className="text-gray-300 leading-relaxed">
            {pitch.elevator_pitch}
          </p>
        </div>

        {/* Problem + Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-4">
          <div className="bg-white/5 rounded-xl p-4 sm:p-5 border border-white/10">
            <h2 className="font-semibold text-lg mb-1 text-blue-300">
              Problem
            </h2>
            <p className="text-gray-300 leading-relaxed">{pitch.problem}</p>
          </div>
          <div className="bg-white/5 rounded-xl p-4 sm:p-5 border border-white/10">
            <h2 className="font-semibold text-lg mb-1 text-purple-300">
              Solution
            </h2>
            <p className="text-gray-300 leading-relaxed">{pitch.solution}</p>
          </div>
        </div>

        {/* UVP */}
        <div>
          <h2 className="font-semibold text-lg mb-1 text-white/90">
            Unique Value Proposition
          </h2>
          <p className="text-gray-300 leading-relaxed">{pitch.uvp}</p>
        </div>

        {/* Logo Concept */}
        <div className="bg-white/5 rounded-xl p-4 sm:p-5 border border-white/10 flex flex-col sm:flex-row items-start gap-3">
          <Palette className="text-purple-400 mt-1 shrink-0" size={20} />
          <div>
            <h2 className="font-semibold text-lg mb-1 text-white/90">
              Logo Concept
            </h2>
            <p className="text-gray-300">{pitch.logo_concept}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PitchResult;
