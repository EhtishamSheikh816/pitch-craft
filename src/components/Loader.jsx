import React, { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";

const Loader = () => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : ""));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#020617] text-white overflow-hidden relative">
      {/* Glowing background gradient orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/3 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="text-center space-y-8">
        {/* Floating Icon */}
        <div className="flex justify-center">
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600 shadow-lg shadow-blue-900/40 animate-bounce">
            <Sparkles size={36} className="text-white animate-spin-slow" />
          </div>
        </div>

        {/* Animated Text */}
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-wide">
          <span className="text-white">Pitch </span>
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Craft
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-lg sm:text-xl text-gray-300">
          Loading your AI-powered experience{dots}
        </p>

        {/* Loading Progress Bar */}
        <div className="max-w-md mx-auto mt-6">
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-progress" />
          </div>
        </div>

        {/* Subtle bouncing dots */}
        <div className="flex justify-center items-center space-x-2 mt-6">
          <div
            className="w-3 h-3 bg-blue-400 rounded-full animate-bounce"
            style={{ animationDelay: "0s" }}
          ></div>
          <div
            className="w-3 h-3 bg-purple-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className="w-3 h-3 bg-pink-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.4s" }}
          ></div>
        </div>

        {/* Footer Text */}
        <p className="text-sm text-gray-500 mt-10">
          Crafted with ❤️ by Pitch Craft
        </p>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes progress {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        .animate-progress {
          animation: progress 1.8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Loader;
