import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Loader2, Lightbulb } from "lucide-react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useNavigate } from "react-router-dom";
import GenerateLoader from "../components/GenerateLoader"; 

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

const CreatePitch = () => {
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

      navigate("/pitch-result", { state: { pitch: parsed, ideaData: data } });
    } catch (err) {
      console.error("Error:", err);
      alert("Failed to generate pitch.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <GenerateLoader />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#020617] text-white px-6 py-10">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4 sm:mb-6 text-center">
        AI-Powered Startup{" "}
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Pitch Generator
        </span>
      </h1>

      <p className="text-base sm:text-lg text-gray-400 text-center max-w-2xl mx-auto leading-relaxed pb-6">
        Transform your startup idea into a professional, investor-ready pitch
        with the power of AI. Get instant feedback, refine your message, and
        craft a winning story effortlessly.
      </p>

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
          <Lightbulb size={20} /> Generate Pitch
        </button>
      </form>
    </div>
  );
};

export default CreatePitch;
