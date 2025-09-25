import Countup from "../../utils/Countup";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
export default function Success() {
  return (
    <section className="py-20 bg-gray-300 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-4/5 md:w-3/5 lg:w-3/5 mx-auto mb-12">
          <Heading align="center" className="my-4 mx-auto" lineHeight="tight">
            Trusted by Industry Leaders
          </Heading>
          <Paragraph align="center">
            See how we've helped businesses transform their logistics
            operations.
          </Paragraph>
        </div>

        <div className="grid md:grid-cols-3 px-8 gap-8">
          <div className="bg-white rounded-lg p-6 backdrop-blur-sm">
            <div className="text-3xl font-bold text-blue-400 mb-2">
              <Countup>40</Countup>%
            </div>
            <div className="text-black mb-4">Cost Savings Achieved</div>
            <p className="text-black opacity-50 text-sm">
              "The optimization strategies implemented reduced our logistics
              costs significantly while improving service quality."
            </p>
            <div className="mt-4 text-black opacity-75 text-xs">
              - Manufacturing Client
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 backdrop-blur-sm ">
            <div className="text-3xl font-bold text-green-400 mb-2">
              <Countup>99.5</Countup>%
            </div>
            <div className="text-black mb-4">On-Time Delivery Rate</div>
            <p className="text-black opacity-50 text-sm">
              "Reliability has improved dramatically. Our customers are happier
              and our operations run smoothly."
            </p>
            <div className="mt-4 text-black opacity-75 text-xs">
              - E-commerce Client
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 backdrop-blur-sm">
            <div className="text-3xl font-bold text-purple-400 mb-2">
              <Countup>60</Countup>%
            </div>
            <div className="text-black mb-4">Faster Processing Time</div>
            <p className="text-black opacity-50 text-sm">
              "Automation and smart routing have transformed our fulfillment
              speed and accuracy."
            </p>
            <div className="mt-4 text-black opacity-75 text-xs">
              - Retail Client
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
