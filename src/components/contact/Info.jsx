import { Home, MessageSquare, Phone } from "lucide-react";
import Heading from "../../components/ui/Heading";
import Paragraph from "../../components/ui/Paragraph";
import Container from '../../components/layout/Container';
export default function Info() {
  return (
    <section className="bg-white py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
      <Container className="flex flex-col gap-4 justify-between">
        {/* social content */}
        <div className="w-2/3">
          <h6 className="uppercase font-heading text-sm font-medium mb-2">
            Contact Info
          </h6>
          <Heading lineHeight="tight">
            We are always happy to assist you
          </Heading>
        </div>

        {/* Contact Cards Section */}
        <div className="grid mt-12 lg:mt-18 grid-cols-1 md:grid-cols-3 gap-24 sm:gap-10">
          {/* Visit Our Office Card */}
          <ContactCard
            icon={<Home className="w-6 h-6 text-white" />}
            title="Visit Our Office"
            // Using a distinct color palette for each card
            colorFrom="from-blue-600"
            colorTo="to-cyan-500"
          >
            <p className="text-gray-600 font-medium">930 Hilgard Ave,</p>
            <p className="text-gray-600 font-medium">Los Angeles,</p>
            <p className="text-gray-600 font-medium">CA 90024, United States</p>
          </ContactCard>

          {/* Give us a call Card */}
          <ContactCard
            icon={<Phone className="w-6 h-6 text-white" />}
            title="Give us a call"
            colorFrom="from-emerald-600"
            colorTo="to-teal-500"
          >
            <a
              href="tel:4065550120"
              className="block text-lg font-semibold text-gray-800 hover:text-emerald-600 transition-colors"
            >
              (406) 555-0120
            </a>
            <a
              href="tel:4072220456"
              className="block text-lg font-semibold text-gray-800 hover:text-emerald-600 transition-colors mt-1"
            >
              (407) 222-0456
            </a>
          </ContactCard>

          {/* Chat with us Card */}
          <ContactCard
            icon={<MessageSquare className="w-6 h-6 text-white" />}
            title="Chat with us"
            colorFrom="from-purple-600"
            colorTo="to-indigo-500"
          >
            <a
              href="mailto:hello@yourdomain.com"
              className="block text-lg font-semibold text-gray-800 hover:text-purple-600 transition-colors"
            >
              hello@yourdomain.com
            </a>
            <a
              href="mailto:contact@yourname.com"
              className="block text-lg font-semibold text-gray-800 hover:text-purple-600 transition-colors mt-1"
            >
              contact@yourname.com
            </a>
          </ContactCard>
        </div>
        </Container>
      </div>
    </section>
  );
}

// Reusable Card Component with modern styling
function ContactCard({ icon, title, colorFrom, colorTo, children }) {
  return (
    // 3. Elevated Card Styling with Hover Effect
    <div className="group bg-white rounded-2xl pt-16 pb-10 px-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 relative">
      {/* 4. Subtle background gradient effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${colorFrom}/5 ${colorTo}/5 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
      ></div>

      {/* Icon Container */}
      <div className="absolute z-40 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className={`w-20 h-20 rounded-full flex items-center justify-center bg-secondary shadow-xl shadow-slate-900/10 group-hover:scale-105 transition-transform duration-300`}
        >
          {icon}
        </div>
      </div>

      <div className="relative pt-4">
        <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>

        {/* Content (Address/Phone/Email) */}
        <div className="space-y-1">{children}</div>
      </div>
    </div>
  );
}
