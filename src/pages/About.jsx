import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Target,
  Users,
  Zap,
  Award,
  Heart,
  TrendingUp,
  Sparkles,
  Globe,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 120,
    });
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <section
        className="flex justify-center items-center text-center px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#020617] text-white"
        data-aos="fade-up"
      >
        <div className="max-w-6xl mx-auto">
          <div
            className="inline-flex items-center space-x-2 bg-white/10 text-blue-300 px-4 py-2 rounded-full mb-6 backdrop-blur-md"
            data-aos="zoom-in"
          >
            <Sparkles size={16} />
            <span className="text-sm font-semibold">About Pitch Craft</span>
          </div>

          <h1
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
            data-aos="fade-up"
          >
            Empowering Entrepreneurs
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Through AI Innovation
            </span>
          </h1>

          <p
            className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            We believe every great idea deserves a powerful pitch. That’s why we
            combine cutting-edge AI with proven strategies to help businesses
            communicate their vision effectively.
          </p>
        </div>
      </section>

      <section className="py-20 px-5 sm:px-6 lg:px-8">
        <div
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          data-aos="fade-up"
        >
          <div data-aos="fade-right">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Our Mission
            </h2>
            <p className="text-base sm:text-lg text-gray-300 mb-6">
              Democratizing access to professional pitch creation tools so
              anyone can present ideas with confidence and clarity.
            </p>
            <p className="text-gray-400 text-sm sm:text-base">
              With AI insights and powerful templates, we help you focus on what
              matters most — your ideas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                Icon: Target,
                color: "text-blue-400",
                title: "Focused",
                desc: "On your success",
                delay: 0,
              },
              {
                Icon: Zap,
                color: "text-purple-400",
                title: "Fast",
                desc: "Minutes, not days",
                delay: 100,
              },
              {
                Icon: Award,
                color: "text-pink-400",
                title: "Quality",
                desc: "Professional results",
                delay: 200,
              },
              {
                Icon: Heart,
                color: "text-cyan-400",
                title: "Passion",
                desc: "Driven by impact",
                delay: 300,
              },
            ].map(({ Icon, color, title, desc, delay }, i) => (
              <div
                key={i}
                data-aos="zoom-in"
                data-aos-delay={delay}
                className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:scale-105 transition-transform text-center"
              >
                <Icon className={`${color} mb-3 mx-auto`} size={36} />
                <h3 className="text-xl font-semibold mb-1">{title}</h3>
                <p className="text-gray-300 text-sm sm:text-base">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-16 px-5 sm:px-6 lg:px-8 text-center"
        data-aos="fade-up"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Our Story
          </h2>
          <p className="text-gray-300 mb-10 text-base sm:text-lg">
            How Pitch Craft came to be
          </p>
          <div
            className="bg-white/10 backdrop-blur-md p-6 sm:p-10 rounded-2xl border border-white/10 text-left space-y-6"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            {[
              "Pitch Craft was born from a simple observation: talented entrepreneurs were losing opportunities not because their ideas weren’t good enough, but because they struggled to present them effectively.",
              "Our founders, with years of VC and startup consulting experience, saw countless brilliant minds fail to secure funding because they couldn’t craft compelling narratives.",
              "In 2023, we decided to change that. Combining storytelling, strategy, and AI, we built Pitch Craft — a platform that helps anyone turn ideas into pitch-perfect presentations.",
            ].map((p, i) => (
              <p
                key={i}
                className="text-gray-300 text-base sm:text-lg leading-relaxed"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-16 px-5 sm:px-6 lg:px-8 text-center"
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Our Values
          </h2>
          <p className="text-gray-300 mb-10 text-base sm:text-lg">
            Principles that guide everything we do
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[Globe, Sparkles, Shield].map((Icon, i) => {
              const values = [
                {
                  title: "Accessibility",
                  desc: "Great pitch tools should be accessible to everyone, regardless of background or budget.",
                  gradient: "from-blue-600 to-blue-800",
                },
                {
                  title: "Innovation",
                  desc: "We push AI boundaries to help you present ideas more effectively.",
                  gradient: "from-purple-600 to-purple-800",
                },
                {
                  title: "Integrity",
                  desc: "Your trust is our top priority — your data is protected and transparency is key.",
                  gradient: "from-pink-600 to-pink-800",
                },
              ];
              const { title, desc, gradient } = values[i];
              return (
                <div
                  key={i}
                  data-aos="zoom-in-up"
                  data-aos-delay={i * 150}
                  className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/10 hover:scale-105 transition-transform"
                >
                  <div
                    className={`bg-gradient-to-br ${gradient} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}
                  >
                    <Icon className="text-white" size={30} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3">
                    {title}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base">{desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="py-16 px-5 sm:px-6 lg:px-8 text-center"
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Our Impact
          </h2>
          <p className="text-gray-300 mb-12 text-base sm:text-lg">
            Numbers that tell our story
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                Icon: Users,
                color: "from-blue-600 to-blue-800",
                stat: "50K+",
                label: "Active Users",
                text: "text-blue-400",
              },
              {
                Icon: Target,
                color: "from-purple-600 to-purple-800",
                stat: "100K+",
                label: "Pitches Created",
                text: "text-purple-400",
              },
              {
                Icon: TrendingUp,
                color: "from-pink-600 to-pink-800",
                stat: "$500M+",
                label: "Funding Raised",
                text: "text-pink-400",
              },
              {
                Icon: Award,
                color: "from-cyan-600 to-cyan-800",
                stat: "95%",
                label: "Success Rate",
                text: "text-cyan-400",
              },
            ].map(({ Icon, color, stat, label, text }, i) => (
              <div key={i} data-aos="zoom-in" data-aos-delay={i * 150}>
                <div
                  className={`bg-gradient-to-br ${color} w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-3`}
                >
                  <Icon className="text-white" size={28} />
                </div>
                <div className={`text-3xl sm:text-4xl font-bold ${text} mb-1`}>
                  {stat}
                </div>
                <div className="text-gray-300 text-sm sm:text-base">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-16 px-5 sm:px-6 lg:px-8 text-center"
        data-aos="fade-up"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-300 mb-12 text-base sm:text-lg">
            The people behind the platform
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "CEO & Co-Founder",
                desc: "Former VC with 10+ years in startup investing.",
              },
              {
                name: "Michael Rodriguez",
                role: "CTO & Co-Founder",
                desc: "AI researcher specializing in NLP and generative models.",
              },
              {
                name: "Emily Watson",
                role: "Head of Product",
                desc: "Passionate about building intuitive, user-friendly products.",
              },
            ].map(({ name, role, desc }, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 150}
                className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/10 hover:scale-105 transition-transform"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto mb-6"></div>
                <h3 className="text-xl sm:text-2xl font-bold mb-1">{name}</h3>
                <p className="text-blue-400 mb-3">{role}</p>
                <p className="text-gray-300 text-sm sm:text-base">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-20 px-5 sm:px-6 lg:px-8 bg-gray-500/5 text-center"
        data-aos="fade-up"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Join Our Mission
          </h2>
          <p className="text-gray-200 mb-10 text-base sm:text-lg">
            Be part of the revolution in pitch creation. Start crafting winning
            pitches today.
          </p>
          <Link
            to="/signup"
            className="bg-white text-blue-700 px-8 sm:px-10 py-3 sm:py-4 rounded-full text-lg font-semibold hover:scale-105 hover:shadow-lg transition-all"
          >
            Get Started for Free
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
