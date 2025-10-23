import { Sparkles, Zap, Target, TrendingUp, CheckCircle } from "lucide-react";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <Hero />

      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              AI-Powered Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to create, refine, and deliver pitch-perfect
              presentations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Sparkles size={24} />,
                color: "from-blue-600 to-blue-800",
                title: "AI Content Generator",
                text: "Generate compelling pitch content instantly. Our AI understands your business and creates persuasive narratives tailored to your audience.",
              },
              {
                icon: <Target size={24} />,
                color: "from-purple-600 to-purple-800",
                title: "Smart Templates",
                text: "Choose from industry-specific templates optimized for success. Each template is AI-enhanced for maximum impact.",
              },
              {
                icon: <Zap size={24} />,
                color: "from-pink-600 to-pink-800",
                title: "Real-time Analysis",
                text: "Get instant feedback on your pitch. AI analyzes clarity, persuasiveness, and structure to help you improve.",
              },
              {
                icon: <TrendingUp size={24} />,
                color: "from-indigo-600 to-indigo-800",
                title: "Market Insights",
                text: "Access AI-powered market data and trends to strengthen your pitch with relevant statistics and insights.",
              },
              {
                icon: <CheckCircle size={24} />,
                color: "from-cyan-600 to-cyan-800",
                title: "Pitch Scoring",
                text: "Get an AI-generated score for your pitch deck. Understand strengths and areas for improvement before presenting.",
              },
              {
                icon: <Sparkles size={24} />,
                color: "from-orange-600 to-orange-800",
                title: "Visual Enhancement",
                text: "AI suggests optimal layouts, color schemes, and visual elements to make your pitch visually stunning.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-md p-8 rounded-2xl hover:shadow-2xl transition-all border border-white/10"
              >
                <div
                  className={`bg-gradient-to-br ${feature.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Create Your Pitch in 3 Simple Steps
            </h2>
            <p className="text-xl text-gray-300">
              From idea to presentation in minutes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                gradient: "from-blue-600 to-purple-600",
                title: "Input Your Idea",
                desc: "Tell our AI about your business, product, or idea. Just a few sentences is all it takes to get started.",
              },
              {
                step: "2",
                gradient: "from-purple-600 to-pink-600",
                title: "AI Crafts Your Pitch",
                desc: "Watch as our AI generates a complete pitch deck with compelling content, data, and visuals tailored to your needs.",
              },
              {
                step: "3",
                gradient: "from-pink-600 to-orange-600",
                title: "Refine & Present",
                desc: "Customize your pitch with our editor, get AI feedback, and present with confidence to win your audience.",
              },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div
                  className={`bg-gradient-to-br ${step.gradient} text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6`}
                >
                  {step.step}
                </div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-500/5 backdrop-blur-lg text-center">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Create Your Winning Pitch?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Join thousands of entrepreneurs and businesses using AI to craft
            pitches that convert
          </p>
          <button className="bg-white text-blue-700 px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all">
            Start Creating for Free
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
