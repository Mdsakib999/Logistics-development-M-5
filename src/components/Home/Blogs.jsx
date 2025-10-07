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
    <section className="relative py-20 sm:py-28 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-40">
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: `${primaryColor}20` }}
        ></div>
        <div
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: `${primaryColor}15` }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
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
        </div>

        {/* Featured Posts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {featuredPosts.map((post, idx) => (
            <article
              key={post.id}
              className={`group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 ${
                idx === 0 ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`relative overflow-hidden ${
                  idx === 0 ? "h-64 lg:h-full" : "h-48"
                }`}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent"></div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold text-slate-900 backdrop-blur-sm"
                    style={{ backgroundColor: `${primaryColor}90` }}
                  >
                    {post.category}
                  </span>
                </div>

                {/* Featured Badge */}
                {post.featured && (
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                      <TrendingUp className="w-3 h-3 text-slate-900" />
                      <span className="text-xs font-semibold text-slate-900">
                        Featured
                      </span>
                    </div>
                  </div>
                )}

                {/* Content Overlay for Featured Post */}
                {idx === 0 && (
                  <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end lg:justify-end">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 line-clamp-3 group-hover:text-slate-100 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-slate-200 mb-4 line-clamp-2 hidden sm:block">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-4 text-sm text-slate-300">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Content for Regular Posts */}
              {idx !== 0 && (
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-slate-700 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-slate-600 mb-4 line-clamp-2 text-sm">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>

                    <button
                      className="inline-flex items-center gap-1 font-semibold text-sm group/btn"
                      style={{ color: primaryColor }}
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>

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
                  Ready to Dive Deeper?
                </h3>
                <p className="text-lg text-slate-300 mb-8">
                  Explore our complete collection of articles, guides, and
                  industry insights
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link to="/blogs">
                    <button
                      className="group/cta inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-slate-900 text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                      style={{ backgroundColor: primaryColor }}
                    >
                      View All Articles
                      <ArrowRight className="w-5 h-5 group-hover/cta:translate-x-1 transition-transform" />
                    </button>
                  </Link>

                  <button className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-lg border-2 border-white/20 hover:bg-white/10 transition-all duration-300">
                    Subscribe to Newsletter
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
                    <div className="text-sm text-slate-400">
                      Articles Published
                    </div>
                  </div>
                  <div>
                    <div
                      className="text-3xl font-bold mb-1"
                      style={{ color: primaryColor }}
                    >
                      <Countup>50</Countup>K+
                    </div>
                    <div className="text-sm text-slate-400">
                      Monthly Readers
                    </div>
                  </div>
                  <div>
                    <div
                      className="text-3xl font-bold mb-1"
                      style={{ color: primaryColor }}
                    >
                      <Countup>15</Countup>+
                    </div>
                    <div className="text-sm text-slate-400">Expert Authors</div>
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
