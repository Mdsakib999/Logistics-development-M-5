import {
  ArrowRight,
  Check,
  Package,
  Shield,
  Ship,
  Star,
  TrendingUp,
  Truck,
  Zap,
} from "lucide-react";
import { useState } from "react";
import {Link} from 'react-router';
export default function Price() {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const primaryColor = "oklch(76.5% 0.177 163.223)";

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses",
      icon: Package,
      monthlyPrice: 299,
      yearlyPrice: 2990,
      features: [
        "Up to 50 shipments/month",
        "Local delivery coverage",
        "Basic tracking system",
        "Email support",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Professional",
      description: "Ideal for growing companies",
      icon: Truck,
      monthlyPrice: 799,
      yearlyPrice: 7990,
      features: [
        "Up to 200 shipments/month",
        "Regional delivery network",
        "Real-time GPS tracking",
        "Priority support",
        "Dedicated account manager",
      ],
      popular: true,
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Enterprise",
      description: "For large-scale operations",
      icon: Ship,
      monthlyPrice: 1999,
      yearlyPrice: 19990,
      features: [
        "Unlimited shipments",
        "Global coverage",
        "Advanced analytics",
        "24/7 premium support",
        "Custom integration",
      ],
      color: "from-orange-500 to-red-500",
    },
  ];

  const highlights = [
    { icon: Shield, text: "No hidden fees", color: "text-blue-600" },
    { icon: Zap, text: "Cancel anytime", color: "text-purple-600" },
    { icon: TrendingUp, text: "Scale as you grow", color: "text-green-600" },
    { icon: Star, text: "30-day money back", color: "text-yellow-600" },
  ];

  return (
    <section className="relative py-20 sm:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
          style={{ backgroundColor: primaryColor, animationDuration: "4s" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
          style={{
            backgroundColor: primaryColor,
            animationDuration: "6s",
            animationDelay: "2s",
          }}
        ></div>
      </div>

      {/* Grid Pattern */}
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
            <Zap className="w-4 h-4" style={{ color: primaryColor }} />
            <span className="text-sm font-semibold text-white">
              Transparent Pricing
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Simple Plans,
            <span className="block mt-2" style={{ color: primaryColor }}>
              Powerful Solutions
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            Choose the perfect plan for your logistics needs. All plans include
            our core features with no hidden costs.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-3 bg-slate-800/50 backdrop-blur-sm rounded-full p-1.5 border border-white/10">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                billingCycle === "monthly"
                  ? "text-slate-900 shadow-lg"
                  : "text-slate-300 hover:text-white"
              }`}
              style={
                billingCycle === "monthly"
                  ? { backgroundColor: primaryColor }
                  : {}
              }
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                billingCycle === "yearly"
                  ? "text-slate-900 shadow-lg"
                  : "text-slate-300 hover:text-white"
              }`}
              style={
                billingCycle === "yearly"
                  ? { backgroundColor: primaryColor }
                  : {}
              }
            >
              Yearly
              <span className="ml-2 text-xs px-2 py-0.5 bg-green-500 text-white rounded-full">
                Save 17%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {plans.map((plan, idx) => {
            const Icon = plan.icon;
            const price =
              billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
            const displayPrice =
              billingCycle === "monthly" ? price : Math.round(price / 12);

            return (
              <div
                key={idx}
                className={`relative group bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                  plan.popular ? "md:scale-105 shadow-2xl" : ""
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div
                    className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r"
                    style={{
                      backgroundImage: `linear-gradient(to right, ${primaryColor}, ${primaryColor}dd)`,
                    }}
                  ></div>
                )}

                <div className="p-8">
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: primaryColor }}
                  >
                    <Icon className="w-7 h-7 text-slate-900" />
                  </div>

                  {/* Plan Name */}
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-white">
                      {plan.name}
                    </h3>
                    {plan.popular && (
                      <span
                        className="px-2 py-1 rounded-full text-xs font-semibold text-slate-900"
                        style={{ backgroundColor: primaryColor }}
                      >
                        Popular
                      </span>
                    )}
                  </div>

                  <p className="text-slate-400 mb-6">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-white">
                        ${displayPrice}
                      </span>
                      <span className="text-slate-400">/mo</span>
                    </div>
                    {billingCycle === "yearly" && (
                      <p className="text-sm text-slate-500 mt-2">
                        ${price} billed annually
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ backgroundColor: `${primaryColor}30` }}
                        >
                          <Check
                            className="w-3 h-3"
                            style={{ color: primaryColor }}
                          />
                        </div>
                        <span className="text-slate-300 text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-3.5 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "text-slate-900 shadow-lg hover:shadow-xl hover:scale-105"
                        : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                    }`}
                    style={
                      plan.popular ? { backgroundColor: primaryColor } : {}
                    }
                  >
                    Get Started
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col sm:flex-row items-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${primaryColor}20` }}
                >
                  <Icon className="w-5 h-5" style={{ color: primaryColor }} />
                </div>
                <span className="text-white text-sm font-medium text-center sm:text-left">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="relative">
          <div className="relative bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden">
            {/* Accent Line */}
            <div
              className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r"
              style={{
                backgroundImage: `linear-gradient(to right, ${primaryColor}, transparent, ${primaryColor})`,
              }}
            ></div>

            <div className="relative px-8 py-12 sm:p-12 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Not Sure Which Plan is Right for You?
              </h3>
              <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                Explore our detailed pricing page or speak with our team to find
                the perfect solution for your business
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/pricing">
                  <button
                    className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-slate-900 text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                    style={{ backgroundColor: primaryColor }}
                  >
                    View Full Pricing
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>

                <Link>
                  <button className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-lg border-2 border-white/20 hover:bg-white/10 transition-all duration-300">
                    Talk to Sales
                  </button>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center items-center gap-6 mt-10 pt-10 border-t border-white/10">
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <Check className="w-4 h-4" style={{ color: primaryColor }} />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <Check className="w-4 h-4" style={{ color: primaryColor }} />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <Check className="w-4 h-4" style={{ color: primaryColor }} />
                  <span>Setup assistance included</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
