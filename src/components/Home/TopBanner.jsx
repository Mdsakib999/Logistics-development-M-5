import React, { useEffect, useRef } from 'react';
export default function TopBanner() {
  const swiperRef = useRef(null);

  useEffect(() => {
    // Dynamically load Swiper CSS
    const swiperCSS = document.createElement('link');
    swiperCSS.rel = 'stylesheet';
    swiperCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/11.0.5/swiper-bundle.min.css';
    document.head.appendChild(swiperCSS);

    // Dynamically load Swiper JS
    const swiperScript = document.createElement('script');
    swiperScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/11.0.5/swiper-bundle.min.js';
    swiperScript.async = true;
    
    swiperScript.onload = () => {
      if (window.Swiper && swiperRef.current) {
        new window.Swiper(swiperRef.current, {
          loop: true,
          speed: 1000,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
          effect: 'fade',
          fadeEffect: {
            crossFade: true
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          keyboard: {
            enabled: true,
          },
          mousewheel: {
            forceToAxis: true,
            sensitivity: 1,
            releaseOnEdges: true,
          },
        });
      }
    };

    document.body.appendChild(swiperScript);

    return () => {
      document.head.removeChild(swiperCSS);
      document.body.removeChild(swiperScript);
    };
  }, []);

  const slides = [
    {
      bg: "https://i.ibb.co.com/FkBqwp32/slide-1.jpg?q=80&w=2000&auto=format&fit=crop",
      subtitle: "TimeKeeper's Archive Museum",
      title: 'Apply For Visa Immigration',
      cta: 'Learn More'
    },
    {
      bg: "https://i.ibb.co.com/s958dG9y/slide-2.jpg?q=80&w=2000&auto=format&fit=crop",
      subtitle: 'Explore Ancient Civilizations',
      title: 'Discover Historical Treasures',
      cta: 'Explore Now'
    },
    {
      bg: "https://i.ibb.co.com/8nhGwbNr/slide-3.jpg?q=80&w=2000&auto=format&fit=crop",
      subtitle: 'Cultural Heritage Experience',
      title: 'Book Your Museum Tour',
      cta: 'Book Now'
    },
    {
      bg: "https://i.ibb.co.com/FkBqwp32/slide-1.jpg?q=80&w=2000&auto=format&fit=crop",
      subtitle: 'Journey Through Time',
      title: 'Experience Living History',
      cta: 'Start Journey'
    }
  ];

  const handleCTAClick = (cta) => {
    alert(`${cta} clicked! Add your navigation logic here.`);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;500;700&display=swap');

        .museum-slider {
          font-family: 'Playfair Display', serif;
        }

        .slide-bg {
          transition: transform 0.7s ease-out;
        }

        .swiper-slide-active .slide-bg {
          transform: scale(1.05);
        }

        .subtitle {
          opacity: 0;
          transform: translateY(-20px);
          animation: slideDown 1s ease-out forwards;
        }

        .decorative-line {
          opacity: 0;
          width: 0;
          animation: expandLine 1s ease-out 0.3s forwards;
        }

        .main-title {
          opacity: 0;
          transform: translateY(-20px);
          animation: slideDown 1s ease-out 0.5s forwards;
        }



        .scroll-indicator {
          opacity: 0;
          animation: fadeIn 1s ease-out 1s forwards;
        }

        .mouse {
          animation: bounce 2s infinite;
        }

        .mouse-wheel {
          animation: scroll 2s infinite;
        }

        .particle {
          animation: float linear infinite;
        }

        @keyframes slideDown {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes expandLine {
          to {
            opacity: 0.6;
            width: 16rem;
          }
        }

        @keyframes fadeIn {
          to {
            opacity: 0.7;
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(10px);
          }
        }

        @keyframes scroll {
          0%, 100% {
            transform: translateY(0);
            opacity: 1;
          }
          50% {
            transform: translateY(8px);
            opacity: 0.3;
          }
        }

        @keyframes float {
          0% {
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
            transform: translateY(-100vh) translateX(50px);
            opacity: 0;
          }
        }

        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: white;
          opacity: 0.5;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          width: 40px;
          border-radius: 6px;
          opacity: 1;
        }

        .swiper-button-next,
        .swiper-button-prev {
          color: white;
          background: rgba(255, 255, 255, 0.1);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.1);
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 20px;
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .swiper-button-next,
          .swiper-button-prev {
            width: 40px;
            height: 40px;
          }

          .swiper-button-next::after,
          .swiper-button-prev::after {
            font-size: 16px;
          }
        }
      `}</style>

      <div className="museum-slider w-full h-screen" id="topBanner-section">
        <div ref={swiperRef} className="swiper w-full h-full">
          <div className="swiper-wrapper">
            {slides.map((slide, index) => (
              <div key={index} className="swiper-slide relative overflow-hidden">
                {/* Background Image */}
                <div
                  className="slide-bg absolute inset-0 bg-cover bg-blend-overlay bg-center"
                  style={{ backgroundImage: `url(${slide.bg})` }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 text-center">
                  {/* Subtitle */}
                  <h1 className="subtitle text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wider mb-4"
                      style={{ textShadow: '2px 4px 12px rgba(0,0,0,0.7)' }}>
                    {slide.subtitle}
                  </h1>

                  {/* Decorative Line */}
                  <div className="decorative-line h-px bg-gradient-to-r from-transparent via-white to-transparent" />

                  {/* Main Title */}
                  <h2 className="main-title text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-tight mt-8 mb-12"
                      style={{ textShadow: '2px 4px 16px rgba(0,0,0,0.8)' }}>
                    {slide.title}
                  </h2>

                  {/* CTA Button */}
                  <button
                    onClick={() => handleCTAClick(slide.cta)}
                    className="cta-button px-12 py-4 bg-transparent border-2 border-white text-white text-lg font-medium tracking-widest transition-all duration-300 hover:scale-105"
                  >
                    {slide.cta}
                  </button>
                </div>

                {/* Floating Particles */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="particle absolute w-1 h-1 bg-white rounded-full opacity-30"
                      style={{
                        top: `${10 + i * 25}%`,
                        left: `${15 + i * 20}%`,
                        animationDuration: `${8 + i * 2}s`,
                        animationDelay: `${i * 0.5}s`
                      }}
                    />
                  ))}
                </div>

                {/* Scroll Indicator */}
                <div className="scroll-indicator absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                  <div className="mouse w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
                    <div className="mouse-wheel w-1 h-2 bg-white rounded-full" />
                  </div>
                  <span className="text-white text-xs tracking-widest mt-2">SCROLL</span>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="swiper-pagination" />

          {/* Navigation */}
          <div className="swiper-button-prev" />
          <div className="swiper-button-next" />
        </div>
      </div>
    </>
  );
}