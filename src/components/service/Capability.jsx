import { CheckCircle, Code, Palette, Zap } from "lucide-react";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";

export default function Capability() {
  const capabilities = [
    {
      category: "Development",
      icon: Code,
      color: "blue",
      items: [
        "Full-stack web development",
        "Mobile app development",
        "API integration & design",
        "Database architecture",
        "Cloud deployment",
      ],
    },
    {
      category: "Design",
      icon: Palette,
      color: "purple",
      items: [
        "UI/UX design systems",
        "Brand identity creation",
        "Responsive web design",
        "Prototyping & wireframing",
        "Design consultation",
      ],
    },
    {
      category: "Performance",
      icon: Zap,
      color: "emerald",
      items: [
        "Speed optimization",
        "SEO implementation",
        "Analytics integration",
        "Security best practices",
        "Scalability planning",
      ],
    },
  ];

  const colorStyles = {
    blue: {
      gradient: "from-blue-500 to-cyan-500",
      light: "bg-blue-50",
      icon: "text-blue-600",
      check: "text-blue-500",
    },
    purple: {
      gradient: "from-purple-500 to-pink-500",
      light: "bg-purple-50",
      icon: "text-purple-600",
      check: "text-purple-500",
    },
    emerald: {
      gradient: "from-emerald-500 to-teal-500",
      light: "bg-emerald-50",
      icon: "text-emerald-600",
      check: "text-emerald-500",
    },
  };
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-4/5 md:w-3/5 lg:w-3/5 mx-auto mb-12">
          <Heading align="center" className="my-4 mx-auto" lineHeight="tight">
            Comprehensive Logistics Capabilities
          </Heading>
          <Paragraph align="center">
            From cutting-edge technology to operational excellence, we deliver
            comprehensive solutions across all aspects of logistics.
          </Paragraph>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            const colors = colorStyles[capability.color];

            return (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-1"
              >
                {/* Header with gradient and icon */}
                <div
                  className={`bg-gradient-to-r ${colors.gradient} p-6 relative overflow-hidden`}
                >
                  <div className="relative z-10 flex items-center gap-4">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {capability.category}
                    </h3>
                  </div>
                  {/* Decorative circles */}
                  <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full" />
                  <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full" />
                </div>

                {/* Content */}
                <div className="p-8">
                  <ul className="space-y-4">
                    {capability.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 group/item"
                      >
                        <div
                          className={`${colors.light} p-1 rounded-lg mt-0.5 group-hover/item:scale-110 transition-transform`}
                        >
                          <CheckCircle className={`w-5 h-5 ${colors.check}`} />
                        </div>
                        <span className="text-gray-700 leading-relaxed group-hover/item:text-gray-900 transition-colors">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom accent */}
                <div
                  className={`h-1 bg-gradient-to-r ${colors.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
