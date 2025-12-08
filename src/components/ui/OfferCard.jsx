import deliveryImage from "../../assets/12-Delivery.png";
import shippingImage from "../../assets/25-Shipping.png";
import weightImage from "../../assets/33-Weight.png";
import boxImage from "../../assets/35-Box.png";
import worldImage from "../../assets/36-World wide shipping.png";
import shippingImage2 from "../../assets/51-Shipping.png";

export default function OfferSection() {
  // JSON DATA INSIDE SAME COMPONENT
  const offerData = [
    {
      number: "01",
      title: "Schnelle Lieferung",
      description:
        "Schnelle und zuverlässige Zustelldienste, die auf Ihre Bedürfnisse zugeschnitten sind. Wir sorgen für pünktlichen Versand zu Ihrer Zufriedenheit.",
      imageSrc: deliveryImage,
    },
    {
      number: "02",
      title: "Sichere Verpackung",
      description:
        "Ihre Waren werden sorgfältig und präzise verpackt, um Sicherheit zu gewährleisten und das Risiko von Schäden zu minimieren.",
      imageSrc: boxImage,
    },
    {
      number: "03",
      title: "Lagerlösungen",
      description:
        "Flexible und sichere Lageroptionen für Ihre Waren, zugeschnitten auf kurzfristige und langfristige Bedürfnisse.",
      imageSrc: weightImage,
    },
    {
      number: "04",
      title: "Beratung",
      description:
        "Wir beginnen damit, Ihre Geschäftsanforderungen zu verstehen und eine maßgeschneiderte Logistiklösung zu entwickeln.",
      imageSrc: worldImage,
    },
    {
      number: "05",
      title: "Planung",
      description:
        "Unsere Experten erstellen eine detaillierte Route und einen Zeitplan, um Kosten­effizienz und Zuverlässigkeit sicherzustellen.",
      imageSrc: shippingImage,
    },
    {
      number: "06",
      title: "Ausführung",
      description:
        "Von der Verpackung bis zum Transport führen wir alles mit Präzision und kontinuierlicher Nachverfolgung aus.",
      imageSrc: shippingImage2,
    },
  ];

  // OfferCard component inside the same file
  const OfferCard = ({ number, title, description, imageSrc }) => {
    return (
      <div className="max-w-sm mx-auto bg-white hover:bg-emerald-200 transition-all rounded-xl p-8 shadow-lg">
        
        {/* Icon */}
        <div className="mb-6">
          <div className="relative">
            <img src={imageSrc} className="w-10 h-10" />
          </div>
        </div>

        {/* Header */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm text-gray-600 font-medium">{number}</span>
            <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-sm leading-relaxed mb-8">{description}</p>

        {/* Decorative Line */}
        <div className="w-full h-px bg-gray-400 opacity-30 mb-6"></div>

        {/* Learn More Button */}
        <button className="text-gray-800 font-semibold text-sm hover:text-gray-900 transition-colors duration-200">
          Mehr erfahren
        </button>
      </div>
    );
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {offerData.map((item, index) => (
        <OfferCard key={index} {...item} />
      ))}
    </div>
  );
}
