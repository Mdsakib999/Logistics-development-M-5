import { CheckCircle } from "lucide-react";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
export default function Capability() {
  const capabilities = [
    {
      category: "Technology Solutions",
      items: [
        "Advanced Tracking Systems",
        "AI-Powered Route Optimization",
        "Automated Inventory Management",
        "Real-time Analytics Dashboard",
        "IoT Sensor Integration",
      ],
    },
    {
      category: "Operational Excellence",
      items: [
        "Quality Management Systems",
        "Performance Metrics & KPIs",
        "Risk Assessment & Mitigation",
        "Compliance Management",
        "Continuous Improvement Programs",
      ],
    },
    {
      category: "Customer Experience",
      items: [
        "Dedicated Account Management",
        "Flexible Service Options",
        "Transparent Communication",
        "Proactive Issue Resolution",
        "Custom Reporting Solutions",
      ],
    },
  ];
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

        <div className="grid lg:grid-cols-3 px-8 md:px-16 gap-8">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className={`bg-secondary h-2`}></div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  {capability.category}
                </h3>
                <ul className="space-y-3">
                  {capability.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
