import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Star,
  ThumbsUp,
  Filter,
  Search,
  Sparkles,
  Quote,
  TrendingUp,
  Users,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";

const Reviews = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 120,
      once: true,
    });
  }, []);

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Startup Founder",
      company: "TechVentures Inc.",
      rating: 5,
      date: "Oct 15, 2025",
      avatar: "SJ",
      review:
        "PitchCraft completely transformed how I present my startup. The AI suggestions were incredibly insightful, and I secured funding within two weeks. The pitch scoring feature helped me identify weak spots I never would have noticed.",
      helpful: 45,
      verified: true,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Manager",
      company: "InnovateCo",
      rating: 5,
      date: "Oct 10, 2025",
      avatar: "MC",
      review:
        "As someone who pitches products regularly, this tool is a game-changer. The AI-generated content is surprisingly good and saves me hours of work. The templates and real-time feedback are invaluable.",
      helpful: 38,
      verified: true,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Entrepreneur",
      company: "GreenFuture Solutions",
      rating: 4,
      date: "Oct 8, 2025",
      avatar: "ER",
      review:
        "Great platform overall. The AI is impressive, and the pitch analysis is detailed. I’d love more industry-specific templates, but it’s already an excellent product.",
      helpful: 32,
      verified: true,
    },
  ];

  const stats = {
    totalReviews: 1247,
    averageRating: 4.9,
    fiveStars: 89,
    fourStars: 8,
    threeStars: 2,
    twoStars: 1,
    oneStars: 0,
  };

  const filteredReviews = reviews.filter((review) => {
    const matchesFilter =
      selectedFilter === "all" || review.rating === parseInt(selectedFilter);
    const matchesSearch =
      review.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.review.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const renderStars = (rating) => (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={`${
            i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-600"
          }`}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0f1f] via-[#111827] to-[#020617] text-white">
      {/* Hero Section */}
      <section
        data-aos="fade-up"
        className="flex justify-center items-center flex-col text-center px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#020617] text-white"
      >
        <div
          className="inline-flex items-center space-x-2 bg-white/10 text-blue-300 px-4 py-2 rounded-full mb-6 backdrop-blur-sm border border-blue-700/40"
          data-aos="zoom-in"
        >
          <Sparkles size={16} />
          <span className="text-sm font-medium">Customer Reviews</span>
        </div>

        <h1
          className="text-4xl sm:text-6xl font-bold leading-tight mb-4"
          data-aos="fade-up"
        >
          Trusted by{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Innovators & Founders
          </span>
        </h1>
        <p
          className="text-gray-400 text-lg max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          See how PitchCraft is helping entrepreneurs craft winning startup
          pitches that secure real results.
        </p>
      </section>

      {/* Stats Section */}
      <section
        className="py-16 px-6 max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        data-aos="fade-up"
      >
        {[
          {
            icon: <Users size={28} />,
            label: "Total Reviews",
            value: stats.totalReviews.toLocaleString(),
            color: "blue",
          },
          {
            icon: <Star size={28} />,
            label: "Average Rating",
            value: stats.averageRating,
            color: "purple",
          },
          {
            icon: <TrendingUp size={28} />,
            label: "Satisfaction Rate",
            value: "98%",
            color: "pink",
          },
          {
            icon: <Award size={28} />,
            label: "5-Star Reviews",
            value: `${stats.fiveStars}%`,
            color: "cyan",
          },
        ].map((item, i) => (
          <div
            key={i}
            data-aos="zoom-in"
            data-aos-delay={i * 100}
            className="bg-gradient-to-br from-[#1e293b] via-[#0f172a] to-[#1e1b4b] border border-blue-800/40 rounded-2xl p-6 text-center hover:shadow-blue-900/30 transition-all"
          >
            <div
              className={`bg-gradient-to-br from-${item.color}-600 to-${item.color}-800 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4`}
            >
              {item.icon}
            </div>
            <div className={`text-3xl font-bold text-${item.color}-400 mb-2`}>
              {item.value}
            </div>
            <p className="text-gray-400">{item.label}</p>
          </div>
        ))}
      </section>

      {/* Filters */}
      <section
        data-aos="fade-up"
        className="pb-10 px-6 max-w-6xl mx-auto flex flex-col sm:flex-row gap-4"
      >
        <div className="relative flex-1">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search reviews..."
            className="w-full pl-12 pr-4 py-3 bg-[#0f172a]/70 border border-blue-900 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="relative">
          <Filter
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
          <select
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            className="w-full sm:w-48 pl-12 pr-4 py-3 bg-[#0f172a]/70 border border-blue-900 rounded-lg text-white focus:outline-none focus:border-blue-500 appearance-none"
          >
            <option value="all">All Ratings</option>
            <option value="5">5 Stars</option>
            <option value="4">4 Stars</option>
            <option value="3">3 Stars</option>
            <option value="2">2 Stars</option>
            <option value="1">1 Star</option>
          </select>
        </div>
      </section>

      {/* Reviews Section */}
      <section
        className="pb-20 px-6 max-w-6xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="grid gap-6">
          {filteredReviews.map((review, i) => (
            <div
              key={review.id}
              data-aos="zoom-in-up"
              data-aos-delay={i * 100}
              className="bg-gradient-to-br from-[#1e293b] via-[#0f172a] to-[#1e1b4b] border border-blue-800/40 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-blue-900/30 transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold">
                  {review.avatar}
                </div>
                <div>
                  <h3 className="text-lg font-bold flex items-center gap-2">
                    {review.name}
                    {review.verified && (
                      <span className="bg-blue-500/20 text-blue-400 text-xs px-2 py-1 rounded-full">
                        Verified
                      </span>
                    )}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {review.role} at {review.company}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    {renderStars(review.rating)}
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Quote
                  className="absolute -top-3 -left-3 text-blue-400/20"
                  size={28}
                />
                <p className="text-gray-300 leading-relaxed pl-6">
                  {review.review}
                </p>
              </div>

              <div className="flex items-center justify-between mt-6 pt-6 border-t border-blue-800/40">
                <button className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition">
                  <ThumbsUp size={16} />
                  <span className="text-sm">Helpful ({review.helpful})</span>
                </button>
                <span className="text-sm text-gray-500">
                  {review.helpful} people found this helpful
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section
        data-aos="fade-up"
        className="py-20 px-5 sm:px-6 lg:px-8 bg-gray-500/5 text-center"
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Ready to Create Your Success Story?
        </h2>
        <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
          Join thousands of satisfied users and start crafting winning pitches
          today.
        </p>
        <Link
          to="/signup"
          className="bg-white text-blue-700 font-semibold px-10 py-4 rounded-full hover:shadow-xl hover:scale-105 transition-all"
        >
          Get Started for Free
        </Link>
      </section>
    </div>
  );
};

export default Reviews;
