import React from "react";
import {
  Home,
  ArrowLeft,
  Search,
  Mail,
  Sparkles,
  AlertCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const Error = () => {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0f1f] via-[#111827] to-[#020617] text-white flex items-center justify-center px-4 sm:px-6 py-10 sm:py-16">
      <div className="w-full max-w-5xl text-center">
        {/* 🔹 Logo */}
        <div className="flex items-center justify-center gap-2 mb-8 sm:mb-10">
          <Sparkles className="text-blue-400" size={30} />
          <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            PitchCraft
          </span>
        </div>

        {/* 🔹 Glowing Error Icon */}
        <div className="relative mb-8 sm:mb-10 flex justify-center">
          <div className="bg-[#1e293b]/60 backdrop-blur-xl w-28 h-28 sm:w-40 sm:h-40 rounded-full flex items-center justify-center border border-blue-800/40 shadow-lg shadow-blue-900/30">
            <AlertCircle className="text-blue-400" size={56} />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-36 h-36 sm:w-48 sm:h-48 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          </div>
        </div>

        {/* 🔹 Error Code */}
        <h1 className="text-7xl sm:text-8xl md:text-9xl font-extrabold mb-2 sm:mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
          404
        </h1>

        {/* 🔹 Message */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3">
          Page Not Found
        </h2>
        <p className="text-base sm:text-lg text-gray-400 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-2">
          Oops! The page you’re looking for doesn’t exist or might have been
          moved. Let’s help you get back on track.
        </p>

        {/* 🔹 Suggestions Box */}
        <div className="bg-gradient-to-br from-[#1e293b] via-[#0f172a] to-[#1e1b4b] backdrop-blur-md p-5 sm:p-8 rounded-2xl border border-blue-800/40 mb-8 sm:mb-10 text-left max-w-2xl mx-auto shadow-lg hover:shadow-blue-900/30 transition-all">
          <h3 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2">
            <Sparkles className="text-blue-400" size={20} />
            <span>Try these steps:</span>
          </h3>
          <ul className="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base">
            {[
              "Double-check the URL for typos.",
              "Use the navigation menu to explore.",
              "Go back to the previous page.",
              "Return to the homepage.",
            ].map((tip, i) => (
              <li key={i} className="flex items-start gap-2 sm:gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 🔹 Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <button
            onClick={handleBack}
            className="w-full sm:w-auto bg-[#1e293b]/60 hover:bg-blue-800/40 border border-blue-800/40 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all hover:shadow-blue-900/30 text-sm sm:text-base"
          >
            <ArrowLeft size={18} />
            <span>Go Back</span>
          </button>

          <Link
            to="/"
            className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold flex items-center justify-center gap-2 shadow-lg shadow-blue-900/30 transition-all text-sm sm:text-base"
          >
            <Home size={18} />
            <span>Back to Home</span>
          </Link>

          <Link
            to="/search"
            className="w-full sm:w-auto bg-[#1e293b]/60 hover:bg-blue-800/40 border border-blue-800/40 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all hover:shadow-blue-900/30 text-sm sm:text-base"
          >
            <Search size={18} />
            <span>Search</span>
          </Link>
        </div>

        {/* 🔹 Quick Links */}
        <div className="bg-gradient-to-br from-[#1e293b] via-[#0f172a] to-[#1e1b4b] p-6 sm:p-8 rounded-2xl border border-blue-800/40 max-w-2xl mx-auto shadow-lg hover:shadow-blue-900/30 transition-all">
          <h3 className="text-lg sm:text-xl font-bold mb-5 text-center text-blue-300">
            Quick Navigation
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {[
              { to: "/features", icon: <Sparkles size={20} />, color: "text-blue-400", label: "Features" },
              { to: "/about", icon: <AlertCircle size={20} />, color: "text-purple-400", label: "About" },
              { to: "/contact", icon: <Mail size={20} />, color: "text-pink-400", label: "Contact" },
              { to: "/reviews", icon: <Sparkles size={20} />, color: "text-cyan-400", label: "Reviews" },
            ].map((item, i) => (
              <Link
                key={i}
                to={item.to}
                className="bg-[#0f172a]/70 hover:bg-blue-800/20 border border-blue-800/40 p-3 sm:p-4 rounded-lg transition-all flex flex-col items-center justify-center"
              >
                <div className={`${item.color} mb-1 sm:mb-2`}>{item.icon}</div>
                <span className="text-xs sm:text-sm font-semibold text-gray-200">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* 🔹 Support */}
        <div className="mt-8 sm:mt-10 text-gray-400 text-sm sm:text-base">
          <p className="mb-2">Still need help?</p>
          <Link
            to="/contact"
            className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
          >
            Contact our support team
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
