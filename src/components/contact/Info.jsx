import { Clock, MapPin, Phone, Mail } from "lucide-react";
import Container from "../layout/Container";
import Heading from "../ui/Heading";
export default function Info() {
  return (
    <div className="bg-gray-100 mt-16 py-16 px-8">
      <Container className="flex gap-8 sm:gap-0 flex-col lg:flex-row justify-between">
        {/* Left Section */}
        <div className="w-full flex flex-col justify-center sm:w-1/2 md:w-2/5">
          <h6 className="capitalize font-heading tex-sm font-medium mb-2">
            Kontaktinformationen
          </h6>
          <Heading className="!capitalize" lineHeight="tight">
            Wir helfen Ihnen jederzeit gerne weiter.
          </Heading>
        </div>

        {/* Contact Cards Grid */}
        <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Email Card */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
            <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <Mail className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Email Address
            </h3>
            <a
              href="mailto:help@info.com"
              className="text-blue-600 font-semibold text-lg hover:text-blue-700 transition-colors block mb-4"
            >
              lang-gmbh-szb@t-online.de
            </a>
            {/* <div className="flex items-start gap-2 text-gray-600 text-sm">
              <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-700">Assistance hours:</p>
                <p>Monday - Friday</p>
                <p>6 am to 8 pm EST</p>
              </div>
            </div> */}
          </div>

          {/* Phone Card */}
          {/* <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
            <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <Phone className="w-7 h-7 text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Phone Number
            </h3>
            <a
              href="tel:8089983456"
              className="text-green-600 font-semibold text-lg hover:text-green-700 transition-colors block mb-4"
            >
              (808) 998-3456
            </a>
            <div className="flex items-start gap-2 text-gray-600 text-sm">
              <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-700">Assistance hours:</p>
                <p>Monday - Friday</p>
                <p>6 am to 8 pm EST</p>
              </div>
            </div>
          </div> */}

          {/* Office Address Card */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
            <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <MapPin className="w-7 h-7 text-purple-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Office Address
            </h3>
            <p className="text-gray-700 font-medium text-base mb-4 leading-relaxed">
              Gruenhainer Strasse 30, 
              <br />
              08340 Schwarzenberg
              <br />

            </p>
            {/* <div className="flex items-start gap-2 text-gray-600 text-sm">
              <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-700">Office hours:</p>
                <p>Monday - Friday</p>
                <p>9 am to 6 pm EST</p>
              </div>
            </div> */}
          </div>
        </div>
      </Container>
    </div>
  );
}
