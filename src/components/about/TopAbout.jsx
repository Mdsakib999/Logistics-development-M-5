import { useEffect, useState } from "react";
import Heading from "../../components/ui/Heading";
import Paragraph from "../../components/ui/Paragraph";
import AboutUs from '../../assets/about-us.jpg'
export default function MuseumBanner() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
        style={{
          backgroundImage:
            "url('https://i.ibb.co.com/Xx34GWsB/about-us.jpg?q=80&w=2000&auto=format&fit=crop')",
          transform: isHovered ? "scale(1.05)" : "scale(1)",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Gradient Overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60"></div>
      </div>

      {/* Content Container */}
      <div
        className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Main Heading - Animates from top */}
        <Heading
          className={`text-white mx-auto relative z-50 transition-all duration-1000 ease-out mb-4 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20"
          }`}
          align="center"
          lineHeight="tight"
        >
          Your Trusted Logistics Partner
        </Heading>
        <Paragraph
          className={`text-white relative z-50 transition-all duration-1000 ease-out mb-4 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20"
          }`}
          align="center"
        >
          Elementum augue ut sagittis vel nunc. Posuere id velit integer proin
          aliquam facilisi quis et cras. Leo nulla integer et aliquet massa
          nunc. Ornare id sit ac varius enim ut nisl.Elementum augue ut sagittis
          vel nunc. Posuere id velit integer proin aliquam facilisi quis et
          cras. Leo nulla integer et aliquet massa nunc. Ornare id sit ac varius
          enim ut nisl.
        </Paragraph>

        {/* CTA Button - Animates last */}
        <button
          className={`group relative px-12 py-4 rounded-lg bg-transparent border-2 border-white text-white font-medium text-lg tracking-wider overflow-hidden transition-all duration-1000 delay-700 ease-out hover:scale-105 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{
            textShadow: "1px 2px 8px rgba(0,0,0,0.6)",
          }}
        >
          {/* Button hover effect */}
          <span className="absolute inset-0 bg-secondary transform -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0"></span>
          <span className="relative z-10 group-hover:text-black transition-colors duration-500">
            Learn More
          </span>
        </button>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
            isLoaded ? "opacity-70" : "opacity-0"
          }`}
        >
          <div className="flex flex-col items-center animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
            <span className="text-white text-xs mt-2 tracking-widest">
              SCROLL
            </span>
          </div>
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-100vh)
              translateX(${Math.random() * 100 - 50}px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
