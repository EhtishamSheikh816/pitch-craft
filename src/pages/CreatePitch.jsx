import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Loader2, Lightbulb } from "lucide-react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useNavigate } from "react-router-dom";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export default function CreatePitch() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
      const prompt = `
      Generate a startup pitch for:
      Title: ${data.title}
      Description: ${data.description}

      Return valid JSON:
      {
        "name": "string",
        "tagline": "string",
        "elevator_pitch": "string",
        "problem": "string",
        "solution": "string",
        "uvp": "string",
        "logo_concept": "string"
      }`;

      const result = await model.generateContent(prompt);
      const text = await result.response.text();
      const jsonStart = text.indexOf("{");
      const jsonEnd = text.lastIndexOf("}") + 1;
      const parsed = JSON.parse(text.substring(jsonStart, jsonEnd));

      // Navigate to result page and pass data
      navigate("/pitch-result", { state: { pitch: parsed, ideaData: data } });
    } catch (err) {
      console.error("Error:", err);
      alert("Failed to generate pitch.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#020617] text-white px-6 py-10">
      <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center">
        Create Your{" "}
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          AI Pitch
        </span>
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white/10 border border-white/20 rounded-2xl p-8 shadow-lg w-full max-w-xl space-y-5"
      >
        <div>
          <label className="block mb-2 font-semibold">Idea Title</label>
          <input
            {...register("title", { required: true })}
            placeholder="e.g., Smart Nutrition App"
            className="w-full p-3 rounded-lg bg-white/5 border border-white/20 text-white outline-none"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">Description</label>
          <textarea
            {...register("description", { required: true })}
            placeholder="Describe your startup idea..."
            className="w-full p-3 rounded-lg bg-white/5 border border-white/20 text-white outline-none h-32"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 py-3 rounded-lg font-semibold hover:shadow-xl transition-all"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin" size={20} /> Generating...
            </>
          ) : (
            <>
              <Lightbulb size={20} /> Generate Pitch
            </>
          )}
        </button>
      </form>
    </div>
  );
}
