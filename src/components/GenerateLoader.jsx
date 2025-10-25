import React, { useEffect, useState } from "react";
import { Sparkles, Lightbulb, Loader2 } from "lucide-react";

const GenerateLoader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 60);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#020617] text-white overflow-hidden relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl top-1/4 left-1/3 animate-pulse"></div>
        <div
          className="absolute w-80 h-80 bg-purple-500/20 rounded-full blur-3xl bottom-1/4 right-1/3 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="mb-10 animate-float">
        <div className="w-24 h-24 bg-white/10 border border-white/20 rounded-full flex items-center justify-center backdrop-blur-lg">
          <Lightbulb className="text-blue-400 animate-pulse" size={40} />
        </div>
      </div>

      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-bold mb-3">
          Generating Your{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            AI Pitch
          </span>
        </h1>
        <p className="text-gray-400 text-lg max-w-md mx-auto">
          Our AI is crafting a compelling startup story for your idea...
        </p>
      </div>

      <div className="w-80 h-2 bg-white/10 rounded-full overflow-hidden mb-8">
        <div
          className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="flex items-center gap-2 text-gray-300 text-lg">
        <Loader2 className="animate-spin text-blue-400" size={22} />
        <span>
          {progress < 100 ? "Analyzing and Generating..." : "Finalizing..."}
        </span>
      </div>

      <div className="absolute bottom-10 flex space-x-3">
        <Sparkles className="text-blue-400 animate-pulse" size={18} />
        <Sparkles
          className="text-purple-400 animate-pulse delay-200"
          size={18}
        />
        <Sparkles className="text-pink-400 animate-pulse delay-500" size={18} />
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .animate-float {
          animation: float 2.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default GenerateLoader;
