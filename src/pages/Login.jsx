import React, { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowLeft,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword } from "../config/firebase";
import toast from "react-hot-toast"; // ✅ Import toast

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [firebaseError, setFirebaseError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  // ✅ Handle login
  const onSubmit = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);

      toast.success("Login successful 🎉");
      navigate("/"); // redirect to homepage
    } catch (error) {
      console.error("Firebase login error:", error);
      setFirebaseError(error.message);

      // ✅ show error toast
      toast.error("Invalid email or password ❌");
    }
  };

  const handleBack = () => navigate(-1);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#020617] text-white flex items-center justify-center px-4 py-12">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div className="hidden lg:block">
          <button
            onClick={handleBack}
            className="flex items-center space-x-2 text-gray-300 hover:text-white transition mb-8"
          >
            <ArrowLeft size={20} />
            <span>Back</span>
          </button>

          <div className="flex items-center space-x-2 mb-6">
            <Sparkles className="text-blue-400" size={32} />
            <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Pitch Craft
            </span>
          </div>

          <h1 className="text-5xl font-bold mb-6">
            Welcome Back to
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Pitch Craft
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-8">
            Continue creating compelling pitches with AI-powered tools designed
            to help you win investors and clients.
          </p>

          <div className="space-y-4">
            {[
              "Access your saved pitches",
              "AI-powered improvements",
              "Real-time analytics",
              "Team collaboration tools",
            ].map((feature, i) => (
              <div key={i} className="flex items-center space-x-3">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 w-6 h-6 rounded-full flex items-center justify-center">
                  <CheckCircle size={16} className="text-white" />
                </div>
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Login Form */}
        <div className="w-full">
          <button
            onClick={handleBack}
            className="lg:hidden flex items-center space-x-2 text-gray-300 hover:text-white transition mb-6"
          >
            <ArrowLeft size={20} />
            <span>Back</span>
          </button>

          <div className="bg-white/10 backdrop-blur-md p-8 sm:p-10 rounded-2xl border border-white/10">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold mb-2">Sign In</h2>
              <p className="text-gray-300">
                Welcome back! Please enter your details
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Email */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">
                  Email Address
                </label>
                <div className="relative">
                  <Mail
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    type="email"
                    {...register("email", { required: "Email is required" })}
                    className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-blue-400 outline-none text-white placeholder-gray-500"
                    placeholder="john@example.com"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">
                  Password
                </label>
                <div className="relative">
                  <Lock
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    {...register("password", {
                      required: "Password is required",
                    })}
                    className="w-full pl-12 pr-12 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-blue-400 outline-none text-white placeholder-gray-500"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
                {firebaseError && (
                  <p className="text-red-400 text-sm mt-1">{firebaseError}</p>
                )}
              </div>

              {/* Remember Me */}
              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-white/20 bg-white/5 text-blue-600"
                  />
                  <span className="text-sm text-gray-300">Remember me</span>
                </label>
                <Link
                  to="#"
                  className="text-sm text-blue-400 hover:text-blue-300"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-2xl transition-all disabled:opacity-60"
              >
                {isSubmitting ? "Signing In..." : "Sign In"}
              </button>

              {/* Signup Link */}
              <p className="text-center text-sm text-gray-300 mt-6">
                Don’t have an account?{" "}
                <Link
                  to="/signup"
                  className="text-blue-400 hover:text-blue-300 font-semibold"
                >
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
