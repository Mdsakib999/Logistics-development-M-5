import React from "react";
import { Star, Quote } from "lucide-react";
import profilePic from "../../assets/profile.png";

const reviewsData = [
  {
    name: "Anna Müller",
    role: "Business Owner",
    review:
      "Ich habe Shazz Freight Forwarding genutzt und war sehr zufrieden. Die Lieferung erfolgte pünktlich, der gesamte Ablauf war professionell. Die Kommunikation war klar und konsistent — kann ich nur empfehlen.",
    rating: 5,
  },
  {
    name: "Markus Schneider",
    role: "E-Commerce Händler",
    review:
      "Meine Waren kamen unbeschädigt und wie versprochen an. Auch als es eine kleine Verzögerung gab, wurde ich informiert — ich musste nicht hinterher telefonieren. Insgesamt zuverlässig, würde ich wieder nutzen.",
    rating: 5,
  },
  {
    name: "Julia Weber",
    role: "Logistik Managerin",
    review:
      "Ich habe schon viele Speditionen genutzt, aber diese hebt sich durch ihre Effizienz und Detailgenauigkeit deutlich ab.",
    rating: 4,
  },
  {
    name: "Thomas Becker",
    role: "Supply Chain Supervisor",
    review:
      "Alle meine Fragen wurden schnell beantwortet, und ich wurde perfekt durch den gesamten Versandprozess begleitet.",
    rating: 4,
  },
];

export default function FeedbackCard({ name, role, review, rating }) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        .feedback-card {
          font-family: 'Inter', sans-serif;
        }

        .card-glow {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-glow:hover {
          transform: scale(1.05);
          box-shadow: 0 25px 50px -12px rgba(34, 197, 94, 0.25);
        }

        .card-glow::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 1.5rem;
          padding: 2px;
          background: linear-gradient(135deg, rgba(34, 197, 94, 0.5), rgba(16, 185, 129, 0.5));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .card-glow:hover::before { opacity: 1; }

        .profile-ring { position: relative; }
        .profile-ring::after {
          content: '';
          position: absolute;
          inset: -3px;
          border-radius: 50%;
          background: linear-gradient(135deg, #22C55E, #10B981);
          z-index: -1;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .card-glow:hover .profile-ring::after { opacity: 1; }

        .quote-icon { transition: all 0.4s ease; }
        .card-glow:hover .quote-icon { transform: scale(1.1) rotate(-5deg); }

        .star-animate { animation: starPulse 2s ease-in-out infinite; }
        @keyframes starPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        .review-text {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

      <div className="feedback-card mt-2 card-glow relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 mb-16 mx-4 overflow-hidden">

        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-secondary/10 to-emerald-500/10 rounded-full blur-3xl -z-10"></div>

        <div className="quote-icon absolute -top-3 -left-3 w-16 h-16 bg-gradient-to-br from-secondary to-emerald-600 rounded-2xl flex items-center justify-center shadow-xl opacity-90">
          <Quote className="text-white" size={28} strokeWidth={2.5} />
        </div>

        <div className="flex items-start gap-5 mb-6 mt-2">
          <div className="profile-ring relative flex-shrink-0">
            <div className="relative w-20 h-20 rounded-full overflow-hidden ring-2 ring-gray-700 shadow-lg">
              <img src={profilePic} alt={name} className="w-full h-full object-cover" />
            </div>

            {/* Verified Badge */}
            <div className="absolute bottom-0 right-0 z-50">
              <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex-1 pt-1">
            <h6 className="text-white font-bold text-xl mb-1.5 tracking-tight">{name}</h6>
            <p className="text-green-400 text-sm font-medium">{role}</p>
          </div>
        </div>

        <div className="mb-6">
          <p className="review-text text-gray-300 leading-relaxed text-base italic">
            "{review}"
          </p>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-6"></div>

        <div className="flex items-center justify-between">
          <div className="flex gap-1.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                fill={i < rating ? "#FCD34D" : "none"}
                stroke={i < rating ? "#FCD34D" : "#4B5563"}
                strokeWidth={i < rating ? 0 : 1.5}
                size={22}
                className={i < rating ? "text-yellow-300 star-animate" : "text-gray-600"}
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        </div>

        <div className="absolute top-5 right-5 w-20 h-20 border-t-2 border-r-2 border-secondary/20 rounded-tr-3xl"></div>
        <div className="absolute bottom-5 left-5 w-20 h-20 border-b-2 border-l-2 border-emerald-500/20 rounded-bl-3xl"></div>
      </div>
    </>
  );
}

export { reviewsData };
