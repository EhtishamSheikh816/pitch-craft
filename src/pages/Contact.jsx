import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Sparkles,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 120,
      once: true,
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("✅ Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        data-aos="fade-up"
        className="flex justify-center items-center text-center px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#020617] text-white"
      >
        <div className="max-w-5xl mx-auto">
          <div
            className="inline-flex items-center space-x-2 bg-white/10 text-blue-300 px-4 py-2 rounded-full mb-6 backdrop-blur-md"
            data-aos="zoom-in"
          >
            <Sparkles size={16} />
            <span className="text-sm font-semibold">Get In Touch</span>
          </div>

          <h1
            data-aos="fade-up"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            Let’s Start a
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Conversation
            </span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Have questions about Pitch Craft? Want to learn more about our
            AI-powered platform? We're here to help you create winning pitches.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Form */}
          <div data-aos="fade-right" className="lg:col-span-2">
            <div className="bg-white/10 backdrop-blur-md p-6 sm:p-10 rounded-2xl border border-white/10">
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div data-aos="fade-up" data-aos-delay="100">
                    <label className="block text-sm font-semibold mb-2 text-gray-300">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 transition text-white placeholder-gray-500"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div data-aos="fade-up" data-aos-delay="200">
                    <label className="block text-sm font-semibold mb-2 text-gray-300">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 transition text-white placeholder-gray-500"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div data-aos="fade-up" data-aos-delay="300">
                  <label className="block text-sm font-semibold mb-2 text-gray-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 transition text-white placeholder-gray-500"
                    placeholder="How can we help you?"
                    required
                  />
                </div>

                <div data-aos="fade-up" data-aos-delay="400">
                  <label className="block text-sm font-semibold mb-2 text-gray-300">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 transition text-white placeholder-gray-500 resize-none"
                    placeholder="Tell us more about your inquiry..."
                    required
                  ></textarea>
                </div>

                <button
                  data-aos="zoom-in"
                  data-aos-delay="500"
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send size={20} />
                </button>
              </form>
            </div>
          </div>

          <div data-aos="fade-left" className="space-y-6">
            <div className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {[
                  {
                    icon: <Mail size={20} />,
                    color: "from-blue-600 to-blue-800",
                    title: "Email",
                    text: "hello@pitchcraft.com",
                    link: "mailto:hello@pitchcraft.com",
                  },
                  {
                    icon: <Phone size={20} />,
                    color: "from-purple-600 to-purple-800",
                    title: "Phone",
                    text: "+1 (234) 567-890",
                    link: "tel:+1234567890",
                  },
                  {
                    icon: <MapPin size={20} />,
                    color: "from-pink-600 to-pink-800",
                    title: "Address",
                    text: "123 Business Ave, San Francisco, CA 94105",
                  },
                  {
                    icon: <Clock size={20} />,
                    color: "from-cyan-600 to-cyan-800",
                    title: "Business Hours",
                    text: "Mon - Fri: 9:00 AM - 6:00 PM\nSat - Sun: Closed",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    data-aos="fade-up"
                    data-aos-delay={i * 100}
                    className="flex items-start space-x-4"
                  >
                    <div
                      className={`bg-gradient-to-br ${item.color} w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-gray-300 hover:text-blue-400 transition-colors break-words"
                        >
                          {item.text}
                        </a>
                      ) : (
                        <p className="text-gray-300 whitespace-pre-line break-words">
                          {item.text}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              data-aos="zoom-in"
              className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/10"
            >
              <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
              <div className="flex flex-wrap gap-3">
                {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="bg-white/10 w-12 h-12 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            <div
              data-aos="fade-up"
              className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-2xl text-center sm:text-left"
            >
              <MessageSquare
                className="text-white mb-4 mx-auto sm:mx-0"
                size={32}
              />
              <h3 className="text-2xl font-bold mb-2">Need Quick Help?</h3>
              <p className="text-blue-100 mb-4 text-sm sm:text-base">
                Check out our FAQ section or start a live chat with our support
                team.
              </p>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all w-full sm:w-auto">
                Visit Help Center
              </button>
            </div>
          </div>
        </div>
      </section>

      <section data-aos="fade-up" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-300 text-base sm:text-lg">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How does Pitch Craft work?",
                a: "Pitch Craft uses advanced AI to analyze your business idea and generate professional pitch decks. Simply input your information, and our AI crafts compelling content, suggests improvements, and helps you create presentations that win.",
              },
              {
                q: "What makes Pitch Craft different?",
                a: "Unlike generic presentation tools, Pitch Craft is designed specifically for pitches. Our AI understands what investors and clients look for.",
              },
              {
                q: "Can I customize the AI-generated content?",
                a: "Absolutely! Our AI provides a foundation, but you have complete control to edit and refine every aspect of your pitch.",
              },
              {
                q: "What kind of support do you offer?",
                a: "We offer 24/7 email support, live chat during business hours, and detailed documentation to help you get the most out of Pitch Craft.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="bg-white/10 backdrop-blur-md p-5 sm:p-6 rounded-xl border border-white/10"
              >
                <h3 className="text-lg sm:text-xl font-bold mb-2">{faq.q}</h3>
                <p className="text-gray-300 text-sm sm:text-base">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        data-aos="zoom-in"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-500/5 text-center"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 mb-8 text-base sm:text-lg">
            Don’t wait — start creating your winning pitch today!
          </p>
          <Link
            to="/generate"
            className="bg-white text-blue-700 px-8 py-3 rounded-full text-lg font-semibold hover:shadow-2xl transition-all inline-block"
          >
            Create Your First Pitch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Contact;
