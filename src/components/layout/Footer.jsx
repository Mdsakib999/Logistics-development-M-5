import React from 'react'
import Button from '../ui/Button'
import {MessageCircleMore} from 'lucide-react';
import Container from '../layout/Container';
export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16 px-8">
      <Container className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-12">
        {/* Company Info */}
        <div className="md:col-span-3">
          <h2 className="text-4xl font-light text-secondary mb-6">Logistic</h2>
          <p className="text-gray-300 w-auto sm:w-96 text-base leading-relaxed mb-8">
            Faucibus quis fringilla scelerisque dui. Amet 
            parturient dui venenatis amet sagittis 
            viverra vel tincidunt. Orci tincidunt.
          </p>
        <Button type="secondary">
          <MessageCircleMore />
          <span>Start Live Chat</span>
        </Button>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-xl font-medium mb-6">Company</h3>
          <ul className="space-y-4">
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Our Partners</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Our Network</a></li>
          </ul>
        </div>

        {/* Resources Links */}
        <div>
          <h3 className="text-xl font-medium mb-6">Resources</h3>
          <ul className="space-y-4">
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Packing Supplies</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Faqs</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Pricing and Quotes</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Tips and Guides</a></li>
          </ul>
        </div>

        {/* Help Links */}
        <div>
          <h3 className="text-xl font-medium mb-6">Help</h3>
          <ul className="space-y-4">
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Customer Support</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Delivery Details</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms & Conditions</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-16 pt-8 border-t border-gray-700">
        <p className="text-gray-400 mb-4 md:mb-0">Copyright © 2023 Logistic</p>
        <p className="text-gray-400">Design By TokoTema</p>
      </div>
    </footer>
  )
}