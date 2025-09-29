import {
  Calendar,
  CheckCircle,
  Clock,
  Mail,
  MapPin,
  Package,
  Phone,
  Search,
  Truck,
} from "lucide-react";
import { useState } from "react";
import Button from "../components/ui/Button";

export const TrackingPage = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [showResults, setShowResults] = useState(false);

  // Sample tracking data (static for demo)
  const trackingData = {
    trackingNumber: "LG2024001234",
    status: "In Transit",
    estimatedDelivery: "Dec 30, 2024",
    origin: "New York, NY",
    destination: "Los Angeles, CA",
    weight: "15.5 kg",
    service: "Express Delivery",
    timeline: [
      {
        status: "Order Placed",
        location: "New York, NY",
        date: "Dec 26, 2024",
        time: "10:30 AM",
        completed: true,
        icon: Package,
      },
      {
        status: "Picked Up",
        location: "New York Distribution Center",
        date: "Dec 26, 2024",
        time: "2:15 PM",
        completed: true,
        icon: Truck,
      },
      {
        status: "In Transit",
        location: "Chicago Hub",
        date: "Dec 27, 2024",
        time: "8:45 AM",
        completed: true,
        icon: Truck,
      },
      {
        status: "Out for Delivery",
        location: "Los Angeles Distribution Center",
        date: "Dec 30, 2024",
        time: "Scheduled",
        completed: false,
        icon: Truck,
      },
      {
        status: "Delivered",
        location: "Los Angeles, CA",
        date: "Dec 30, 2024",
        time: "Expected by 5:00 PM",
        completed: false,
        icon: CheckCircle,
      },
    ],
  };

  const handleTrack = (e) => {
    e.preventDefault();
    if (trackingNumber.trim()) {
      setShowResults(true);
    }
  };

  const features = [
    {
      icon: Clock,
      title: "Real-Time Updates",
      description: "Get instant notifications about your shipment status",
    },
    {
      icon: MapPin,
      title: "Location Tracking",
      description: "See exactly where your package is at any moment",
    },
    {
      icon: Phone,
      title: "24/7 Support",
      description: "Our team is always here to help with your shipment",
    },
    {
      icon: CheckCircle,
      title: "Delivery Confirmation",
      description: "Receive proof of delivery with signature and photo",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-green-100 text-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              TRACK YOUR SHIPMENT
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Enter your tracking number to see real-time updates on your
              delivery
            </p>
          </div>

          {/* Tracking Form */}
          <div className="max-w-3xl mx-auto">
            <form
              onSubmit={handleTrack}
              className="flex flex-col sm:flex-row gap-4"
            >
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  placeholder="Enter tracking number (e.g., LG2024001234)"
                  className="w-full px-6 py-4 outline-1 outline-gray-500 rounded-lg text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="sm:w-auto w-full whitespace-nowrap"
              >
                <Search className="h-5 w-5 mr-2" />
                Track Package
              </Button>
            </form>

            <p className="text-gray-600 text-sm mt-4 text-center">
              Find your tracking number in the confirmation email or shipping
              receipt
            </p>
          </div>
        </div>
      </section>

      {/* Tracking Results */}
      {showResults && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Status Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                <div>
                  <h2 className="text-3xl font-bold text-primary mb-2">
                    Tracking Number: {trackingData.trackingNumber}
                  </h2>
                  <p className="text-gray-600">Status updated 2 hours ago</p>
                </div>
                <div className="bg-accent/10 px-6 py-3 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Current Status</p>
                  <p className="text-2xl font-bold text-accent">
                    {trackingData.status}
                  </p>
                </div>
              </div>

              {/* Shipment Details Grid */}
              <div className="grid md:grid-cols-4 gap-6 pt-6 border-t border-gray-200">
                <div>
                  <p className="text-gray-600 text-sm mb-2">
                    Estimated Delivery
                  </p>
                  <p className="font-semibold text-lg text-primary flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-accent" />
                    {trackingData.estimatedDelivery}
                  </p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-2">Origin</p>
                  <p className="font-semibold text-lg text-primary flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-accent" />
                    {trackingData.origin}
                  </p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-2">Destination</p>
                  <p className="font-semibold text-lg text-primary flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-accent" />
                    {trackingData.destination}
                  </p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-2">Service Type</p>
                  <p className="font-semibold text-lg text-primary flex items-center">
                    <Package className="h-5 w-5 mr-2 text-accent" />
                    {trackingData.service}
                  </p>
                </div>
              </div>
            </div>

            {/* Progress Timeline */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-8">
                Shipment Journey
              </h3>

              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>

                {/* Timeline Items */}
                <div className="space-y-8">
                  {trackingData.timeline.map((item, index) => (
                    <div
                      key={index}
                      className="relative flex items-start gap-6"
                    >
                      {/* Icon */}
                      <div
                        className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                          item.completed
                            ? "bg-accent text-black"
                            : "bg-gray-200 text-gray-500"
                        }`}
                      >
                        <item.icon className="h-6 w-6" />
                      </div>

                      {/* Content */}
                      <div
                        className={`flex-1 pb-8 ${
                          !item.completed ? "opacity-50" : ""
                        }`}
                      >
                        <div className="bg-gray-50 rounded-xl p-6">
                          <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                            <h4 className="text-xl font-bold text-primary">
                              {item.status}
                            </h4>
                            <span
                              className={`px-3 py-1 rounded-full text-sm font-medium ${
                                item.completed
                                  ? "bg-accent/20 text-accent-dark"
                                  : "bg-gray-200 text-gray-600"
                              }`}
                            >
                              {item.completed ? "Completed" : "Pending"}
                            </span>
                          </div>
                          <p className="text-gray-600 mb-2 flex items-center">
                            <MapPin className="h-4 w-4 mr-2" />
                            {item.location}
                          </p>
                          <p className="text-gray-500 text-sm flex items-center">
                            <Clock className="h-4 w-4 mr-2" />
                            {item.date} at {item.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              WHY USE OUR TRACKING?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay informed every step of the way with our advanced tracking
              system
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                NEED <span className="text-accent">HELP</span> TRACKING?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our support team is available 24/7 to assist you with any
                tracking questions or concerns.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <div className="flex gap-2">
                      <span>
                        <Phone />
                      </span>
                      <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                    </div>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                    <p className="text-gray-400 text-sm">Available 24/7</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <div className="flex gap-2">
                      <span>
                        <Mail />
                      </span>
                      <h3 className="font-semibold text-lg mb-1">
                        Email Support
                      </h3>
                    </div>

                    <p className="text-gray-300">tracking@logistics.com</p>
                    <p className="text-gray-400 text-sm">
                      Response within 2 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm hover:scale-103 duration-300 transition-all rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Common Questions</h3>
              <div className="space-y-4">
                <div className="border-b border-white/20 pb-4">
                  <h4 className="font-semibold mb-2">
                    Where is my tracking number?
                  </h4>
                  <p className="text-gray-300 text-sm">
                    You'll find it in your confirmation email or shipping
                    receipt.
                  </p>
                </div>
                <div className="border-b border-white/20 pb-4">
                  <h4 className="font-semibold mb-2">
                    How often is tracking updated?
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Updates occur in real-time as your package moves through our
                    network.
                  </p>
                </div>
                <div className="pb-4">
                  <h4 className="font-semibold mb-2">
                    What if my tracking isn't working?
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Contact our support team immediately for assistance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-black mb-6">
            SHIP WITH CONFIDENCE
          </h2>
          <p className="text-xl text-black/80 mb-8">
            Experience hassle-free shipping with real-time tracking and
            dedicated support
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/contact" variant="secondary" size="lg">
              Get a Quote
            </Button>
            <Button
              to="/service"
              variant="outline"
              size="lg"
              className="border-black text-black hover:bg-black hover:text-white"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrackingPage;
