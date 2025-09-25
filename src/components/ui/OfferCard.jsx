export default function OfferCard({imageSrc}) {
  return (
    <div className="max-w-sm mx-auto bg-white hover:bg-secondary transition-all rounded-xl p-8 shadow-lg">
      {/* Icon */}
      <div className="mb-6">
        <div className="relative">
          <img src={imageSrc} className="w-10 h-10" />
        </div>
      </div>
      
      {/* Header */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-3">
          <h2 className="text-2xl font-semibold text-gray-800">Local Moving</h2>
          <span className="text-sm text-gray-600 font-medium">01</span>
        </div>
      </div>
      
      {/* Description */}
      <p className="text-gray-700 text-sm leading-relaxed mb-8">
        Lorem morbi et amet suscipit. At sed proin quis risus urna a. Magna in odio in urna amet ultrices fermentum.
      </p>
      
      {/* Decorative line */}
      <div className="w-full h-px bg-gray-400 opacity-30 mb-6"></div>
      
      {/* Learn More Button */}
      <button className="text-gray-800 font-semibold text-sm hover:text-gray-900 transition-colors duration-200">
        Learn More
      </button>
    </div>
  );
}