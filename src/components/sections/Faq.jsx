import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import faqData from "/public/data.js";
import Container from '../layout/Container';
import Heading from '../ui/Heading';
import Paragraph from '../ui/Paragraph';
import Button from '../ui/Button';
import {Phone} from 'lucide-react';
export default function Faq() {
  const [expandedItem, setExpandedItem] = useState(0); // First item expanded by default

  const toggleItem = (index) => {
    setExpandedItem(expandedItem === index ? -1 : index);
  };

  return (
    <div className="bg-gray-50 px-4 py-16">
      <Container className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - FAQ Title and Contact */}
        <div className="flex flex-col">
          <div className="space-y-4 mt-12">
            <Heading
              lineHeight="tight"
            >
              Frequently asked Questions
            </Heading>
            <Paragraph className="mb-16">
You can return any item within 30 days of purchase as long as it’s in its original condition with tags still attached. Simply contact our customer service team, and they will guide you through the process. Please note that certain items, such as swimwear and final sale items, are non-returnable.
            </Paragraph>
                        <Button className="mt-16">
              <Phone /> <span className="ml-2">Contact Us</span>
            </Button>
          </div>
        </div>

        {/* Right Column - FAQ Items */}
        <div className="space-y-0">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-gray-300">
              <button
                onClick={() => toggleItem(index)}
                className="w-full py-6 px-6 text-left bg-secondary transition-colors duration-200 flex items-center justify-between"
              >
                <span className="text-gray-900 font-medium text-sm pr-4">
                  {item.question}
                </span>
                {expandedItem === index ? (
                  <Minus className="w-5 h-5 text-gray-900 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-900 flex-shrink-0" />
                )}
              </button>

              {expandedItem === index && (
                <div className="px-6 py-6 bg-white">
                  <p className="text-gray-800 text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
