import { Award, CheckCircle, Clock, Zap } from "lucide-react";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
export default function Growth() {
  const metrics = [
    {
      number: "99.8%",
      label: "Delivery Success Rate",
      icon: <CheckCircle className="w-8 h-8 text-green-500" />,
    },
    {
      number: "24/7",
      label: "Customer Support",
      icon: <Clock className="w-8 h-8 text-blue-500" />,
    },
    {
      number: "50+",
      label: "Countries Served",
      icon: <Award className="w-8 h-8 text-purple-500" />,
    },
    {
      number: "15min",
      label: "Average Response Time",
      icon: <Zap className="w-8 h-8 text-orange-500" />,
    },
  ];
  return (
    <section className="bg-gray-200 text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-4">
            <Heading className="mt-4 " lineHeight="tight">
              Logistics That Powers Growth
            </Heading>
            <Paragraph>
              Transform your supply chain with our intelligent logistics
              platform. From AI-driven optimization to real-time visibility, we
              deliver solutions that scale with your business.
            </Paragraph>
            <Button>Get Started</Button>
          </div>
          <div className="relative px-8">
            <div className="bg-gradient-to-br from-white to-gray-300 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
              <div className="grid grid-cols-2 gap-6">
                {metrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-3">
                      {metric.icon}
                    </div>
                    <div className="text-2xl font-bold text-black mb-1">
                      {metric.number}
                    </div>
                    <div className="text-black opacity-50 text-sm">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
