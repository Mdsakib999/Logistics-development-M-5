import React from 'react'
import Container from '../layout/Container';
import Button from '../ui/Button';
import {ArrowRight} from 'lucide-react';
export default function Form() {
  return (
    <div className="py-12 sm:py-16">
            <Container className="pr-8 sm:pr-16">
      {/* Top Row - Three Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <label className="block text-gray-800 text-lg mb-2">Your Name</label>
          <input 
            type="text"
            className="w-full border-b-2 border-gray-300 bg-transparent py-3 px-0 focus:outline-none focus:border-gray-600 text-gray-800"
          />
        </div>
        <div>
          <label className="block text-gray-800 text-lg mb-2">Email Address</label>
          <input 
            type="email"
            className="w-full border-b-2 border-gray-300 bg-transparent py-3 px-0 focus:outline-none focus:border-gray-600 text-gray-800"
          />
        </div>
        <div>
          <label className="block text-gray-800 text-lg mb-2">Phone Number (optional)</label>
          <input 
            type="tel"
            className="w-full border-b-2 border-gray-300 bg-transparent py-3 px-0 focus:outline-none focus:border-gray-600 text-gray-800"
          />
        </div>
      </div>

      {/* Message Field */}
      <div className="mb-8">
        <label className="block text-gray-800 text-lg mb-2">Message</label>
        <textarea 
          rows="3"
          className="w-full border-b-2 border-gray-300 bg-transparent py-3 px-0 resize-none focus:outline-none focus:border-gray-600 text-gray-800"
        ></textarea>
      </div>

      {/* Submit Button */}
      <Button className="">
        <span className="mr-2 font-semibold">Leave us a Message</span> <span><ArrowRight strokeWidth={2} /></span>
      </Button>
    </Container>
    </div>
  )
}