import Heading from "../ui/Heading";
import Container from '../layout/Container';
export default function Info() {
  return (
    <div className="bg-gray-100 py-16 px-8">
      <Container className="flex gap-8 sm:gap-0 flex-col sm:flex-row justify-between">
        {/* Left Section */}
        <div className="w-full sm:w-1/5 md:w-2/5">
          <h6 className="capitalize font-heading tex-sm font-medium mb-2">
            Contact Info
          </h6>
          <Heading className="!capitalize" lineHeight="tight">
            We are always happy to assist you
          </Heading>
        </div>

        {/* Email Section */}
        <div>
          <h2 className="text-xl font-bold text-black mb-2">Email Address</h2>
          <div className="w-12 h-0.5 bg-black mb-4"></div>
          <p className="text-lg font-bold text-black mb-6">help@info.com</p>
          <p className="text-gray-600">Assistance hours:</p>
          <p className="text-gray-600">Monday - Friday 6 am to <br /> 8 pm EST</p>
        </div>

        {/* Phone Section */}
        <div>
          <h2 className="text-xl font-bold text-black mb-2">Number</h2>
          <div className="w-12 h-0.5 bg-black mb-4"></div>
          <p className="text-lg font-bold text-black mb-6">(808) 998-34256</p>
          <p className="text-gray-600">Assistance hours:</p>
          <p className="text-gray-600">Monday - Friday 6 am to <br/>  8 pm EST</p>
        </div>
      </Container>
    </div>
  );
}
