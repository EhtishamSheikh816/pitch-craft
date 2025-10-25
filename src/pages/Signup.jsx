import React, { useEffect, useState } from "react";
import {
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  ArrowLeft,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import { useForm } from "react-hook-form";
import {
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "../config/firebase";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const password = watch("password");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const onSubmit = async (data) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await updateProfile(userCredential.user, {
        displayName: data.fullName,
      });

      toast.success("🎉 Account created successfully!");
      reset();
      navigate("/generate");
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Signup failed. Please try again.");
    }
  };

  const handleBack = () => navigate(-1);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#020617] text-white flex items-center justify-center px-4 py-12">
      <div
        className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center"
        data-aos="fade-up"
      >
        {/* Left Side - Branding */}
        <div className="hidden lg:block" data-aos="fade-right">
          <button
            onClick={handleBack}
            className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors mb-8"
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

          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Start Creating
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Winning Pitches
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-8">
            Join thousands of entrepreneurs using AI to craft pitches that
            convert ideas into opportunities.
          </p>

          <div className="space-y-4">
            {[
              "AI-powered pitch generation",
              "Professional templates",
              "Real-time feedback & scoring",
              "Market insights & data",
            ].map((feature, i) => (
              <div key={i} className="flex items-center space-x-3">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle size={16} className="text-white" />
                </div>
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Signup Form */}
        <div className="w-full" data-aos="fade-left">
          <button
            onClick={handleBack}
            className="lg:hidden flex items-center space-x-2 text-gray-300 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            <span>Back</span>
          </button>

          <div className="bg-white/10 backdrop-blur-md p-8 sm:p-10 rounded-2xl border border-white/10">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold mb-2">
                Create Account
              </h2>
              <p className="text-gray-300">
                Start your journey with Pitch Craft
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Full Name */}
              <div data-aos="fade-up" data-aos-delay="100">
                <label className="block text-sm font-semibold mb-2 text-gray-300">
                  Full Name
                </label>
                <div className="relative">
                  <User
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    type="text"
                    placeholder="John Doe"
                    {...register("fullName", {
                      required: "Full name is required",
                    })}
                    className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 transition-colors text-white placeholder-gray-500"
                  />
                </div>
                {errors.fullName && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div data-aos="fade-up" data-aos-delay="200">
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
                    placeholder="john@example.com"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email format",
                      },
                    })}
                    className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 transition-colors text-white placeholder-gray-500"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div data-aos="fade-up" data-aos-delay="300">
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
                    placeholder="••••••••"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                    className="w-full pl-12 pr-12 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 transition-colors text-white placeholder-gray-500"
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
              </div>

              {/* Confirm Password */}
              <div data-aos="fade-up" data-aos-delay="400">
                <label className="block text-sm font-semibold mb-2 text-gray-300">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="••••••••"
                    {...register("confirmPassword", {
                      required: "Confirm your password",
                      validate: (value) =>
                        value === password || "Passwords do not match",
                    })}
                    className="w-full pl-12 pr-12 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 transition-colors text-white placeholder-gray-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                data-aos="zoom-in"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-2xl transition-all disabled:opacity-60"
              >
                {isSubmitting ? "Creating Account..." : "Create Account"}
              </button>

              <div className="text-center text-sm text-gray-300 mt-6">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-blue-400 hover:text-blue-300 font-semibold"
                >
                  Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
