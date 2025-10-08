import {
  Award,
  BarChart3,
  CheckCircle,
  Clock,
  Globe,
  HeartHandshake,
  Leaf,
  Package,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  Truck,
  Users,
  Zap,
} from "lucide-react";
import React, { useState } from "react";

export default function WhyChoose() {
  const [activeFeature, setActiveFeature] = useState(0);
  const primaryColor = "oklch(76.5% 0.177 163.223)";

  const mainReasons = [
    {
      icon: Shield,
      title: "Unmatched Reliability",
      description:
        "With a 99.8% on-time delivery rate, we ensure your cargo reaches its destination safely and punctually.",
      stat: "99.8%",
      statLabel: "On-time Delivery",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Globe,
      title: "Global Network",
      description:
        "Our extensive network spans 150+ countries, providing seamless international and domestic logistics solutions.",
      stat: "150+",
      statLabel: "Countries Served",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: TrendingUp,
      title: "Advanced Technology",
      description:
        "Real-time tracking, AI-powered route optimization, and automated warehouse systems for maximum efficiency.",
      stat: "24/7",
      statLabel: "Live Tracking",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Award,
      title: "Industry Expertise",
      description:
        "Over 25 years of experience delivering excellence in logistics management and supply chain solutions.",
      stat: "25+",
      statLabel: "Years Experience",
      color: "from-orange-500 to-red-500",
    },
  ];

  const features = [
    {
      icon: Clock,
      title: "Lightning Fast Delivery",
      description:
        "Same-day and next-day delivery options available across major cities",
      details: [
        "Express shipping within 24 hours",
        "Real-time shipment tracking",
        "Priority handling for urgent deliveries",
        "Flexible scheduling options",
      ],
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description:
        "24/7 customer service team ready to assist with any logistics challenge",
      details: [
        "Multi-lingual support staff",
        "Dedicated account managers",
        "Proactive issue resolution",
        "Regular status updates",
      ],
    },
    {
      icon: Zap,
      title: "Cost Efficiency",
      description:
        "Competitive pricing without compromising on quality or service",
      details: [
        "Volume-based discounts",
        "No hidden fees or charges",
        "Fuel surcharge protection",
        "Transparent pricing structure",
      ],
    },
    {
      icon: HeartHandshake,
      title: "Custom Solutions",
      description:
        "Tailored logistics strategies designed for your unique business needs",
      details: [
        "Scalable services",
        "Industry-specific solutions",
        "White-glove handling options",
        "Integrated supply chain management",
      ],
    },
    {
      icon: Target,
      title: "Precision & Accuracy",
      description: "Advanced systems ensure error-free processing and delivery",
      details: [
        "Barcode scanning technology",
        "Automated sorting systems",
        "99.9% accuracy rate",
        "Quality control checkpoints",
      ],
    },
    {
      icon: Leaf,
      title: "Sustainable Practices",
      description:
        "Committed to reducing our carbon footprint through eco-friendly solutions",
      details: [
        "Electric vehicle fleet",
        "Carbon-neutral shipping options",
        "Optimized route planning",
        "Recyclable packaging materials",
      ],
    },
  ];

  const stats = [
    {
      icon: Package,
      number: "2M+",
      label: "Deliveries Completed",
      color: "text-blue-500",
    },
    {
      icon: Users,
      number: "50K+",
      label: "Happy Customers",
      color: "text-purple-500",
    },
    {
      icon: Truck,
      number: "5K+",
      label: "Fleet Vehicles",
      color: "text-green-500",
    },
    {
      icon: BarChart3,
      number: "98%",
      label: "Customer Satisfaction",
      color: "text-orange-500",
    },
  ];

  return (
    <section className="relative py-20 sm:py-28 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-40">
        <div
          className="absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: `${primaryColor}20` }}
        ></div>
        <div
          className="absolute bottom-20 left-20 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: `${primaryColor}15` }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
            style={{ backgroundColor: `${primaryColor}20` }}
          >
            <Sparkles className="w-4 h-4" style={{ color: primaryColor }} />
            <span className="text-sm font-semibold text-slate-700">
              Our Advantages
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Why Companies
            <span className="block mt-2" style={{ color: primaryColor }}>
              Choose Us
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            We combine cutting-edge technology, industry expertise, and
            unwavering commitment to deliver exceptional logistics solutions
            that drive your business forward.
          </p>
        </div>

        {/* Main Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {mainReasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: primaryColor }}
                >
                  <Icon className="w-8 h-8 text-slate-900" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {reason.title}
                </h3>

                <p className="text-slate-600 mb-6 leading-relaxed">
                  {reason.description}
                </p>

                {/* Stat */}
                <div className="pt-6 border-t border-slate-100">
                  <div
                    className="text-4xl font-bold mb-1"
                    style={{ color: primaryColor }}
                  >
                    {reason.stat}
                  </div>
                  <div className="text-sm text-slate-500 font-medium">
                    {reason.statLabel}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Features Section */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-20">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Side - Feature List */}
            <div className="p-8 lg:p-12 bg-slate-50">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">
                Comprehensive Logistics Solutions
              </h3>

              <div className="space-y-3">
                {features.map((feature, idx) => {
                  const Icon = feature.icon;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveFeature(idx)}
                      className={`w-full flex items-start gap-4 p-4 rounded-xl transition-all duration-300 ${
                        activeFeature === idx
                          ? "shadow-lg"
                          : "hover:bg-white hover:shadow-md"
                      }`}
                      style={
                        activeFeature === idx
                          ? { backgroundColor: `${primaryColor}20` }
                          : {}
                      }
                    >
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-all ${
                          activeFeature === idx ? "shadow-md" : ""
                        }`}
                        style={{
                          backgroundColor:
                            activeFeature === idx ? primaryColor : "#e2e8f0",
                        }}
                      >
                        <Icon
                          className={`w-6 h-6 ${
                            activeFeature === idx
                              ? "text-slate-900"
                              : "text-slate-600"
                          }`}
                        />
                      </div>

                      <div className="text-left flex-1">
                        <h4 className="font-bold text-slate-900 mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-slate-600">
                          {feature.description}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Side - Feature Details */}
            <div className="p-8 lg:p-12 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
              <div className="h-full flex flex-col justify-center">
                <div className="mb-8">
                  {React.createElement(features[activeFeature].icon, {
                    className: "w-12 h-12 mb-4",
                    style: { color: primaryColor },
                  })}

                  <h3 className="text-3xl font-bold mb-4">
                    {features[activeFeature].title}
                  </h3>

                  <p className="text-slate-300 text-lg mb-8">
                    {features[activeFeature].description}
                  </p>
                </div>

                <div className="space-y-4">
                  {features[activeFeature].details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle
                        className="w-5 h-5 flex-shrink-0 mt-0.5"
                        style={{ color: primaryColor }}
                      />
                      <span className="text-slate-200">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Trusted by Businesses Worldwide
            </h3>
            <p className="text-slate-300 text-lg">
              Numbers that speak for our excellence
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="text-center">
                  <div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-4"
                    style={{ backgroundColor: `${primaryColor}30` }}
                  >
                    <Icon className="w-8 h-8" style={{ color: primaryColor }} />
                  </div>
                  <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-slate-400 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
