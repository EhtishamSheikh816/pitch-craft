import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { db } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { ArrowLeft, FileText, Lightbulb, Target, Palette } from "lucide-react";

const PitchDetails = () => {
  const { id } = useParams();
  const [pitch, setPitch] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPitch = async () => {
      try {
        const docRef = doc(db, "pitches", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setPitch(docSnap.data());
        } else {
          console.log("No such pitch!");
        }
      } catch (error) {
        console.error("Error fetching pitch:", error);
      }
      setLoading(false);
    };
    fetchPitch();
  }, [id]);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400">
        Loading pitch details...
      </div>
    );

  if (!pitch)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-gray-400">
        <p>Pitch not found.</p>
        <Link to="/dashboard" className="text-blue-400 mt-4 hover:underline">
          Back to Dashboard
        </Link>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0f1f] via-[#111827] to-[#020617] text-white px-6 py-10">
      <div className="max-w-4xl mx-auto">
        {/* 🔙 Back Button */}
        <Link
          to="/dashboard"
          className="flex items-center gap-2 text-gray-300 hover:text-white mb-8 transition"
        >
          <ArrowLeft size={20} />
          Back
        </Link>

        {/* 🧾 Pitch Card */}
        <div className="bg-[#1e293b]/80 border border-blue-900/40 rounded-2xl p-8 shadow-lg space-y-6">
          {/* Title & Tagline */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <FileText className="text-blue-400" />
              <h1 className="text-3xl font-bold text-blue-400 break-words">
                {pitch.name || "Untitled Pitch"}
              </h1>
            </div>
            <p className="text-gray-400 italic text-lg">
              {pitch.tagline || "No tagline provided"}
            </p>
          </div>

          {/* Elevator Pitch */}
          <section className="border-l-4 border-purple-600 pl-4">
            <h2 className="text-xl font-semibold mb-1 text-white/90">
              Elevator Pitch
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {pitch.elevator_pitch || "No elevator pitch provided"}
            </p>
          </section>

          {/* Problem + Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="text-yellow-400" size={18} />
                <h2 className="font-semibold text-lg text-blue-300">Problem</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {pitch.problem || "No problem statement provided"}
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <Target className="text-green-400" size={18} />
                <h2 className="font-semibold text-lg text-purple-300">
                  Solution
                </h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {pitch.solution || "No solution provided"}
              </p>
            </div>
          </div>

          {/* Unique Value Proposition */}
          <div>
            <h2 className="font-semibold text-lg mb-1 text-white/90">
              Unique Value Proposition
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {pitch.uvp || "No UVP provided"}
            </p>
          </div>

          {/* Logo Concept */}
          <div className="bg-white/5 rounded-xl p-5 border border-white/10 flex flex-col sm:flex-row items-start gap-3">
            <Palette className="text-purple-400 mt-1 shrink-0" size={20} />
            <div>
              <h2 className="font-semibold text-lg mb-1 text-white/90">
                Logo Concept
              </h2>
              <p className="text-gray-300">
                {pitch.logo_concept || "No logo concept provided"}
              </p>
            </div>
          </div>

          {/* Created At */}
          <p className="text-xs text-gray-500 text-right">
            Created at:{" "}
            {pitch.createdAt?.seconds
              ? new Date(pitch.createdAt.seconds * 1000).toLocaleString()
              : "Not available"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PitchDetails;
