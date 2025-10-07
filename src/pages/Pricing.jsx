import {
  ArrowRight,
  Check,
  Clock,
  Package,
  Plane,
  Shield,
  Ship,
  Star,
  Truck,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import Heading from "../components/ui/Heading";
import Paragraph from "../components/ui/Paragraph";
import Countup from '../utils/Countup';

export default function Pricing() {
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
        "5% fuel surcharge",
        "Standard insurance included",
      ],
      popular: false,
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
        "Priority phone & email support",
        "3% fuel surcharge",
        "Premium insurance coverage",
        "Dedicated account manager",
        "API access",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For large-scale operations",
      icon: Ship,
      monthlyPrice: 1999,
      yearlyPrice: 19990,
      features: [
        "Unlimited shipments",
        "National & international coverage",
        "Advanced analytics dashboard",
        "24/7 premium support",
        "No fuel surcharge",
        "Full cargo insurance",
        "Custom integration support",
        "Volume-based discounts",
        "Dedicated logistics team",
      ],
      popular: false,
    },
  ];

  const addons = [
    {
      name: "Express Delivery",
      price: 49,
      icon: Zap,
      description: "Same-day delivery service",
    },
    {
      name: "Fragile Handling",
      price: 29,
      icon: Shield,
      description: "Extra care for delicate items",
    },
    {
      name: "After-hours Pickup",
      price: 39,
      icon: Clock,
      description: "Flexible scheduling options",
    },
    {
      name: "Air Freight",
      price: 199,
      icon: Plane,
      description: "Premium air transport",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-slate-900 text-white">
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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <Star className="w-4 h-4" style={{ color: primaryColor }} />
              <span className="text-sm font-medium">
                Trusted by <Countup>5000</Countup>+ businesses
              </span>
            </div>
            <Heading className="mx-auto" color="white" align="center">
              Transparent Pricing for
              <span className="block mt-2" style={{ color: primaryColor }}>
                Every Delivery Need
              </span>
            </Heading>
            <Paragraph align="center" className="text-gray-200">
              Choose the perfect plan for your logistics requirements. Scale as
              you grow with no hidden fees.
            </Paragraph>

            {/* Billing Toggle */}
            <div className="inline-flex items-center gap-3 bg-slate-800 rounded-full p-1.5">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                  billingCycle === "monthly"
                    ? "text-slate-900 shadow-lg"
                    : "text-slate-400 hover:text-white"
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
                    : "text-slate-400 hover:text-white"
                }`}
                style={
                  billingCycle === "yearly"
                    ? { backgroundColor: primaryColor }
                    : {}
                }
              >
                Yearly
                <span className="ml-2 text-xs px-2 py-0.5 bg-green-500 text-white rounded-full">
                  Save <Countup>17</Countup>%
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, idx) => {
            const Icon = plan.icon;
            const price =
              billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
            const displayPrice =
              billingCycle === "monthly" ? price : Math.round(price / 12);

            return (
              <div
                key={idx}
                className={`relative bg-white rounded-2xl shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  plan.popular ? "ring-2 md:scale-105" : ""
                }`}
                style={plan.popular ? { ringColor: primaryColor } : {}}
              >
                {plan.popular && (
                  <div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-sm font-semibold text-slate-900 shadow-lg whitespace-nowrap"
                    style={{ backgroundColor: primaryColor }}
                  >
                    Most Popular
                  </div>
                )}

                <div className="p-8">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg"
                    style={{ backgroundColor: primaryColor }}
                  >
                    <Icon className="w-7 h-7 text-slate-900" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-slate-600 mb-6">{plan.description}</p>

                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-slate-900">
                        $<Countup>{displayPrice}</Countup>
                      </span>
                      <span className="text-slate-600">
                        /{billingCycle === "monthly" ? "mo" : "mo"}
                      </span>
                    </div>
                    {billingCycle === "yearly" && (
                      <p className="text-sm text-slate-500 mt-2">
                        $<Countup>{price}</Countup> billed annually
                      </p>
                    )}
                  </div>

                  <button
                    className={`w-full py-3.5 rounded-xl font-semibold transition-all duration-200 mb-8 ${
                      plan.popular
                        ? "text-slate-900 shadow-lg hover:shadow-xl hover:scale-105"
                        : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                    }`}
                    style={
                      plan.popular ? { backgroundColor: primaryColor } : {}
                    }
                  >
                    Get Started <ArrowRight className="inline w-4 h-4 ml-1" />
                  </button>

                  <div className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ backgroundColor: `${primaryColor}20` }}
                        >
                          <Check
                            className="w-3 h-3"
                            style={{ color: primaryColor }}
                          />
                        </div>
                        <span className="text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Add-ons Section */}
      <div className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Heading align="center" className="mx-auto">
              Optional Add-ons
            </Heading>
            <Paragraph align="center">
              Enhance your service with premium features tailored to your needs
            </Paragraph>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {addons.map((addon, idx) => {
              const Icon = addon.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${primaryColor}20` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: primaryColor }} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {addon.name}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">
                    {addon.description}
                  </p>
                  <div className="text-2xl font-bold text-slate-900">
                    $<Countup>{addon.price}</Countup>
                    <span className="text-sm font-normal text-slate-500">
                      /shipment
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* FAQ/CTA Section */}
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heading align="center" color="white" className="mx-auto">
            Need a Custom Solution?
          </Heading>
          <Paragraph align="center" className="text-gray-200">
            Our team can create a tailored logistics plan for your unique
            requirements
          </Paragraph>
          <Link to="/contact">
            <button
              className="px-8 py-4 rounded-xl font-semibold text-slate-900 text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200"
              style={{ backgroundColor: primaryColor }}
            >
              Contact Sales Team
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
