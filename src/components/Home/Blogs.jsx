import {
  ArrowRight,
  Calendar,
  Clock,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router";
import Countup from '../../utils/Countup';
export default function Blogs() {
  const primaryColor = "oklch(76.5% 0.177 163.223)";

  const featuredPosts = [
    {
      id: 1,
      title:
        "The Future of Autonomous Delivery: How AI is Revolutionizing Last-Mile Logistics",
      excerpt:
        "Explore how artificial intelligence and autonomous vehicles are transforming the logistics industry.",
      author: "Sarah Mitchell",
      date: "Oct 5, 2025",
      readTime: "8 min",
      category: "Technology",
      image:
        "https://i.ibb.co.com/bMx2JRkq/pexels-tiger-lily-4483774.jpg?w=800&q=80",
      featured: true,
    },
    {
      id: 2,
      title: "5 Essential Strategies for Optimizing Your Supply Chain in 2025",
      excerpt:
        "Learn the key strategies that leading companies are using to streamline operations.",
      author: "Michael Chen",
      date: "Oct 3, 2025",
      readTime: "6 min",
      category: "Logistics",
      image:
        "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=600&q=80",
    },
    {
      id: 3,
      title:
        "Sustainability in Transport: Green Logistics Practices That Matter",
      excerpt:
        "Discover how modern logistics companies are reducing their carbon footprint.",
      author: "Emma Rodriguez",
      date: "Oct 1, 2025",
      readTime: "5 min",
      category: "Industry",
      image:
        "https://images.unsplash.com/photo-1617704548623-340376564e68?w=600&q=80",
    },
  ];

  return (
    <section className="relative py-2  overflow-hidden">


      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        {/* <div className="text-center mb-12 sm:mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
            style={{ backgroundColor: `${primaryColor}20` }}
          >
            <Sparkles className="w-4 h-4" style={{ color: primaryColor }} />
            <span className="text-sm font-semibold text-slate-700">
              Latest Insights
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Explore Our
            <span className="block mt-2" style={{ color: primaryColor }}>
              Logistics Blog
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
            Stay ahead with expert insights, industry trends, and practical tips
            for modern logistics management
          </p>
        </div> */}

  

        {/* CTA Section */}
        <div className="relative">
          <div className="relative bg-slate-900 rounded-3xl overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 2px 2px, rgb(255 255 255 / 0.15) 1px, transparent 0)",
                  backgroundSize: "40px 40px",
                }}
              ></div>
            </div>

            <div className="relative px-8 py-12 sm:p-16 text-center">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Bereit, tiefer einzutauchen?
                </h3>
                <p className="text-lg text-slate-300 mb-8">
                  Entdecken Sie unser komplettes Serviceangebot und Brancheneinblicke
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link to="/service">
                    <button
                      className="group/cta inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-slate-900 text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                      style={{ backgroundColor: primaryColor }}
                    >
                     Alle anzeigen 
                      <ArrowRight className="w-5 h-5 group-hover/cta:translate-x-1 transition-transform" />
                    </button>
                  </Link>

                  <button className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-lg border-2 border-white/20 hover:bg-white/10 transition-all duration-300">
                    Newsletter Abonnieren
                  </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/10">
                  <div>
                    <div
                      className="text-3xl font-bold mb-1"
                      style={{ color: primaryColor }}
                    >
                      <Countup>150</Countup>+
                    </div>
                    {/* <div className="text-sm text-slate-400">
                      Articles Published
                    </div> */}
                  </div>
                  <div>
                    <div
                      className="text-3xl font-bold mb-1"
                      style={{ color: primaryColor }}
                    >
                      <Countup>50</Countup>K+
                    </div>
                    {/* <div className="text-sm text-slate-400">
                      Monthly Readers
                    </div> */}
                  </div>
                  <div>
                    <div
                      className="text-3xl font-bold mb-1"
                      style={{ color: primaryColor }}
                    >
                      <Countup>15</Countup>+
                    </div>
                    {/* <div className="text-sm text-slate-400">Expert Authors</div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
