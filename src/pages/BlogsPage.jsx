import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, TrendingUp, Package, Truck, Globe, Zap, ChevronRight, FileSearch, Tag, User } from 'lucide-react';
import Heading from '../components/ui/Heading';
import Paragraph from '../components/ui/Paragraph';
export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  const primaryColor = 'oklch(76.5% 0.177 163.223)';
  
  const categories = [
    { id: 'all', name: 'All Posts', icon: Globe },
    { id: 'industry', name: 'Industry Insights', icon: TrendingUp },
    { id: 'technology', name: 'Technology', icon: Zap },
    { id: 'logistics', name: 'Logistics Tips', icon: Package },
    { id: 'fleet', name: 'Fleet Management', icon: Truck }
  ];

  const featuredPost = {
    id: 1,
    title: 'The Future of Autonomous Delivery: How AI is Revolutionizing Last-Mile Logistics',
    excerpt: 'Explore how artificial intelligence and autonomous vehicles are transforming the logistics industry, reducing costs, and improving delivery efficiency across the globe.',
    author: 'Sarah Mitchell',
    date: 'October 5, 2025',
    readTime: '8 min read',
    category: 'technology',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    tags: ['AI', 'Automation', 'Innovation']
  };

  const blogPosts = [
    {
      id: 2,
      title: '5 Essential Strategies for Optimizing Your Supply Chain in 2025',
      excerpt: 'Learn the key strategies that leading companies are using to streamline their supply chain operations and reduce costs.',
      author: 'Michael Chen',
      date: 'October 3, 2025',
      readTime: '6 min read',
      category: 'logistics',
      image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=600&q=80',
      tags: ['Supply Chain', 'Optimization', 'Strategy']
    },
    {
      id: 3,
      title: 'Sustainability in Transport: Green Logistics Practices That Matter',
      excerpt: 'Discover how modern logistics companies are reducing their carbon footprint while maintaining efficiency and profitability.',
      author: 'Emma Rodriguez',
      date: 'October 1, 2025',
      readTime: '5 min read',
      category: 'industry',
      image: 'https://images.unsplash.com/photo-1617704548623-340376564e68?w=600&q=80',
      tags: ['Sustainability', 'Green Tech', 'Environment']
    },
    {
      id: 4,
      title: 'Fleet Management 101: Technology Tools Every Manager Needs',
      excerpt: 'A comprehensive guide to the essential technologies and software solutions for effective fleet management.',
      author: 'David Park',
      date: 'September 28, 2025',
      readTime: '7 min read',
      category: 'fleet',
      image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=600&q=80',
      tags: ['Fleet', 'Management', 'Technology']
    },
    {
      id: 5,
      title: 'Real-Time Tracking: How GPS Technology Improves Customer Satisfaction',
      excerpt: 'Understanding the impact of real-time tracking on customer experience and operational transparency.',
      author: 'Lisa Thompson',
      date: 'September 25, 2025',
      readTime: '4 min read',
      category: 'technology',
      image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&q=80',
      tags: ['GPS', 'Tracking', 'Customer Service']
    },
    {
      id: 6,
      title: 'Cross-Border Shipping: Navigating International Logistics Challenges',
      excerpt: 'Expert insights on managing customs, regulations, and documentation for international shipments.',
      author: 'James Wilson',
      date: 'September 22, 2025',
      readTime: '9 min read',
      category: 'industry',
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&q=80',
      tags: ['International', 'Customs', 'Regulations']
    },
    {
      id: 7,
      title: 'The Rise of Micro-Fulfillment Centers in Urban Areas',
      excerpt: 'How smaller distribution hubs are enabling faster deliveries and better service in city centers.',
      author: 'Rachel Green',
      date: 'September 20, 2025',
      readTime: '5 min read',
      category: 'logistics',
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80',
      tags: ['Warehousing', 'Urban Logistics', 'Fulfillment']
    },
    {
      id: 8,
      title: 'Predictive Analytics: Using Data to Prevent Delivery Delays',
      excerpt: 'Learn how advanced analytics can help predict and prevent common logistics bottlenecks.',
      author: 'Alex Kumar',
      date: 'September 18, 2025',
      readTime: '6 min read',
      category: 'technology',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
      tags: ['Analytics', 'Data Science', 'Efficiency']
    },
    {
      id: 9,
      title: 'Electric Fleet Transition: A Complete Implementation Guide',
      excerpt: 'Step-by-step guidance for transitioning your commercial fleet to electric vehicles.',
      author: 'Tom Anderson',
      date: 'September 15, 2025',
      readTime: '10 min read',
      category: 'fleet',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&q=80',
      tags: ['Electric Vehicles', 'Sustainability', 'Fleet']
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(255 255 255 / 0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <TrendingUp className="w-4 h-4" style={{ color: primaryColor }} />
              <span className="text-sm font-medium">Latest insights & updates</span>
            </div>
            <Heading color="white" className="mb-6">
              Logistics
              <span className="block mt-2" style={{ color: primaryColor }}>
                Insights & Resources
              </span>
            </Heading>
            <Paragraph className="mb-8 text-gray-200">
              Stay ahead with expert insights, industry trends, and practical tips for modern logistics management.
            </Paragraph>
            
            {/* Search Bar */}
            <div className="relative max-w-xl">
              <FileSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 z-40" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:border-transparent"
                style={{ focusRing: primaryColor }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white border-b sticky top-18 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-2 py-4 no-scrollbar">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium whitespace-nowrap transition-all ${
                    selectedCategory === cat.id
                      ? 'text-slate-900 shadow-lg'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                  style={selectedCategory === cat.id ? { backgroundColor: primaryColor } : {}}
                >
                  <Icon className="w-4 h-4" />
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Featured Post */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1 h-6 rounded-full" style={{ backgroundColor: primaryColor }}></div>
            <h2 className="text-2xl font-bold text-slate-900">Featured Article</h2>
          </div>
          
          <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent lg:hidden"></div>
              </div>
              
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span 
                    className="px-3 py-1 rounded-full text-sm font-semibold text-slate-900"
                    style={{ backgroundColor: `${primaryColor}40` }}
                  >
                    {categories.find(c => c.id === featuredPost.category)?.name}
                  </span>
                  <span className="text-slate-500 text-sm">Featured</span>
                </div>
                
                <h3 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-slate-700 transition-colors">
                  {featuredPost.title}
                </h3>
                
                <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                
                <button 
                  className="inline-flex items-center gap-2 font-semibold text-lg group/btn"
                  style={{ color: primaryColor }}
                >
                  Read Full Article
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1 h-6 rounded-full" style={{ backgroundColor: primaryColor }}></div>
            <h2 className="text-2xl font-bold text-slate-900">Latest Articles</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span 
                    className="px-3 py-1 rounded-full text-xs font-semibold text-slate-900 backdrop-blur-sm"
                    style={{ backgroundColor: `${primaryColor}90` }}
                  >
                    {categories.find(c => c.id === post.category)?.name}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-slate-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                  
                  <button 
                    className="inline-flex items-center gap-1 font-semibold text-sm group/btn"
                    style={{ color: primaryColor }}
                  >
                    Read More
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">No articles found</h3>
            <p className="text-slate-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      {/* Newsletter CTA */}
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Heading align="center" color="white" className="mb-4 mx-auto">
              Stay Updated with Industry Insights
            </Heading>
            <Paragraph align="center" className="text-gray-200">
              Get the latest logistics trends and tips delivered to your inbox
            </Paragraph>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:border-transparent"
            />
            <button
              className="px-8 py-4 rounded-xl font-semibold text-slate-900 whitespace-nowrap shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200"
              style={{ backgroundColor: primaryColor }}
            >
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}