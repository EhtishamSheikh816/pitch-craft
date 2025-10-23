import React from "react";
import { Sparkles, ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex justify-center items-center px-4 sm:px-6 py-10 lg:px-8 bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#020617] text-white">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center space-x-2 bg-white/10 text-blue-300 px-4 py-2 rounded-full mb-6 backdrop-blur-md">
          <Sparkles size={16} />
          <span className="text-sm font-semibold">
            AI-Powered Pitch Creation
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Craft Winning Pitches
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            with AI Intelligence
          </span>
        </h1>

        <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
          Transform your ideas into compelling pitch decks in minutes. Let AI
          help you build, refine, and deliver presentations that win hearts and
          investors.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all flex items-center space-x-2">
            <span>Start Creating Free</span>
            <ArrowRight size={20} />
          </button>

          <button className="bg-transparent border border-white/40 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 hover:scale-105 transition-all flex items-center space-x-2">
            <Play size={20} />
            <span>Watch Demo</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
