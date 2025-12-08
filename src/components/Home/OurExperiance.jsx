import {
  Award,
  Clock,
  Globe,
  Package,
  Shield,
  TrendingUp,
  Truck,
  Users,
} from "lucide-react";
import { useState } from "react";
import Heading from "../../components/ui/Heading";
import Paragraph from "../../components/ui/Paragraph";
import Countup from "../../utils/Countup";
import {Link} from 'react-router';

const OurExperiance = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const stats = [
    {
      icon: Package,
      value: "50000",
      label: "Lieferungen",
      color: "from-emerald-400 to-teal-400",
    },
    {
      icon: Truck,
      value: "500",
      label: "Fuhrfahrzeuge",
      color: "from-blue-400 to-cyan-400",
    },
    {
      icon: Globe,
      value: "25",
      label: "Länder",
      color: "from-purple-400 to-pink-400",
    },
    {
      icon: Users,
      value: "1000",
      label: "Zufriedene Kunden",
      color: "from-orange-400 to-red-400",
    },
  ];

  const features = [
    {
      icon: Clock,
      title: "Pünktliche Lieferung",
      description:
        "99,8 % Pünktlichkeitsrate mit Echtzeit-Tracking auf allen Strecken",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: Shield,
      title: "Sicherer Transport",
      description:
        "Umfassender Versicherungsschutz und fortschrittliche Sicherheitsprotokolle",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: TrendingUp,
      title: "Cost Efficient",
      description:
        "Optimierte Routen und Kraftstoffmanagement für wettbewerbsfähige Preise",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Award,
      title: "Award Winning",
      description:
        "Branchenweit anerkannte Spitzenleistungen in Logistik und Kundenservice",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden ">
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[oklch(76.5%_0.177_163.223)] bg-opacity-10 border border-[oklch(76.5%_0.177_163.223)] border-opacity-30 mb-6">
            <span className="text-white text-sm font-semibold tracking-wider">
              Unsere Erfahrung
            </span>
          </div>
          <Heading align="center" className="mb-6 mx-auto">
            Vertraut von Tausenden
            <span className="block mt-2 bg-gradient-to-r from-[oklch(76.5%_0.177_163.223)] via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Weltweit
            </span>
          </Heading>
          <Paragraph className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Mit jahrzehntelanger Logistikexpertise liefern wir Exzellenz bei jeder Sendung.
          </Paragraph>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative bg-slate-900 bg-opacity-50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-slate-800 hover:border-[oklch(76.5%_0.177_163.223)] transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[oklch(76.5%_0.177_163.223)]/20"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
                ></div>
                <div className="relative">
                  <div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} bg-opacity-10 mb-4`}
                  >
                    <Icon
                      className={`w-6 h-6 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}
                      strokeWidth={2}
                    />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-[oklch(76.5%_0.177_163.223)] transition-colors duration-300">
                    <Countup>{stat.value}</Countup>+
                  </div>
                  <div className="text-slate-400 text-sm md:text-base font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isHovered = hoveredCard === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative bg-slate-900 bg-opacity-50 backdrop-blur-sm rounded-3xl p-8 border border-slate-800 hover:border-[oklch(76.5%_0.177_163.223)] transition-all duration-500 overflow-hidden"
              >
                {/* Animated gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                {/* Shine effect */}
                <div
                  className={`absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent`}
                ></div>

                <div className="relative">
                  <div
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                  >
                    <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[oklch(76.5%_0.177_163.223)] transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed text-base">
                    {feature.description}
                  </p>

                  {/* Animated arrow */}
                  <div
                    className={`mt-6 flex items-center gap-2 text-[oklch(76.5%_0.177_163.223)] font-semibold transition-all duration-300 ${
                      isHovered ? "translate-x-2" : ""
                    }`}
                  >
                    <span className="text-sm">Mehr erfahren</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
            <Link to="/service">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-[oklch(76.5%_0.177_163.223)] to-emerald-500 rounded-lg font-bold text-white text-lg shadow-lg hover:shadow-2xl hover:shadow-[oklch(76.5%_0.177_163.223)]/50 transition-all duration-300 transform hover:scale-105 overflow-hidden">
            <span className="relative z-10">Starten Sie Ihre Sendung</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </button>      
            </Link>

        </div>
      </div>
    </section>
  );
};

export default OurExperiance;
