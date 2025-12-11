import { Home, ArrowLeft, Truck, Package, MapPin, Phone } from 'lucide-react';

export default function ErrorPage() {
  const quickLinks = [
    { name: 'Hemi', icon: <Home className="w-5 h-5" />, path: '/' },
    { name: 'Dienstleistungen', icon: <Package className="w-5 h-5" />, path: '/service' },
    { name: 'Über uns', icon: <MapPin className="w-5 h-5" />, path: '/about' },
    { name: 'Kontakt', icon: <Phone className="w-5 h-5" />, path: '/contact' }
  ];

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        
        {/* Simple Truck Icon */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mb-6">
            <Truck className="w-12 h-12 text-gray-600" />
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-12">
          <h1 className="text-6xl md:text-7xl font-bold text-black mb-4">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Seite Nicht Gefunden
          </h2>
          <p className="text-gray-600 text-lg max-w-md mx-auto">
            Die gesuchte Seite existiert nicht oder wurde verschoben.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button 
            onClick={() => window.history.back()}
            className="bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Geh Zurück
          </button>
          <a
            href="/"
            className="bg-green-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
          >
            <Home className="w-5 h-5" />
            Nach Hause Gehen
          </a>
        </div>

        {/* Quick Links */}
        <div className="border-t border-gray-200 pt-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-6">
            Schnellzugriff
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.path}
                className="group p-4 rounded-lg border border-gray-200 hover:border-green-500 hover:bg-green-50 transition-all duration-200"
              >
                <div className="text-gray-600 group-hover:text-green-600 mb-2 flex justify-center transition-colors">
                  {link.icon}
                </div>
                <span className="text-sm font-medium text-gray-800 group-hover:text-green-700">
                  {link.name}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600 mb-4">
            Benötigen Sie Hilfe? Kontaktieren Sie unser Support-Team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <a 
              href="tel:+1234567890"
              className="text-green-600 hover:text-green-700 font-medium transition-colors"
            >
              Call: (123) 456-7890
            </a>
            <span className="hidden sm:inline text-gray-300">|</span> */}
            <a 
              href="mailto:support@logistic.com"
              className="text-green-600 hover:text-green-700 font-medium transition-colors"
            >
              Email: info@lang-transport.de
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}