import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, Clock, MapPin, ArrowRight, Truck } from 'lucide-react';
import {Link} from 'react-router';
export default function Footer() {
  const primaryColor = 'oklch(76.5% 0.177 163.223)';
  
  const quickLinks = [
    { name: 'Home', to: '/' },
    { name: 'About us', to: '/about' },
    { name: 'Services', to:'/service' },
    { name: 'Contact', to:'/contact' },
    { name: 'blogs', to:'/blogs' },
  ];

  const socialLinks = [
    { icon: Facebook, color:'blue', href: '#', label: 'Facebook' },
    { icon: Twitter, color:'#1DA1F2', href: '#', label: 'Twitter' },
    { icon: Instagram, color:'#E1306C', href: '#', label: 'Instagram' },
    { icon: Youtube,color:'#FF0000', href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="relative  bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(255 255 255 / 0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center"
                     style={{ backgroundColor: primaryColor }}>
                  <Truck className="w-7 h-7 text-slate-900" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">LOGISTIC</h3>
                  <p className="text-xs text-slate-400 uppercase tracking-wider">Logistics Services</p>
                </div>
              </div>
              
              <p className="text-slate-400 mb-6 leading-relaxed">
                Delivering excellence in logistics and transportation solutions across the globe with reliability and innovation.
              </p>
              
              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.href}
                      aria-label={social.label}
                      className={`w-10 h-10 rounded-lg  hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110`}
                      style={{
                        ':hover': { 
                          borderColor: primaryColor,
                          backgroundColor: `${primaryColor}20` 
                        }
                      }}
                    >
                      <Icon className="w-5 h-5 text-slate-300" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                <div className="w-1 h-6 rounded-full" style={{ backgroundColor: primaryColor }}></div>
                Useful Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      to={link.to}
                      className="group inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Working Hours */}
            <div>
              <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                <div className="w-1 h-6 rounded-full" style={{ backgroundColor: primaryColor }}></div>
                Working Hours
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                       style={{ backgroundColor: `${primaryColor}20` }}>
                    <Clock className="w-5 h-5" style={{ color: primaryColor }} />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">Mon to Fri</p>
                    <p className="text-slate-400 text-sm">9:00 AM - 5:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                       style={{ backgroundColor: `${primaryColor}20` }}>
                    <Clock className="w-5 h-5" style={{ color: primaryColor }} />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">Saturday</p>
                    <p className="text-slate-400 text-sm">10:00 AM - 6:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-slate-800">
                    <Clock className="w-5 h-5 text-slate-500" />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">Sunday</p>
                    <p className="text-slate-400 text-sm">Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter & Contact */}
            <div>
              <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                <div className="w-1 h-6 rounded-full" style={{ backgroundColor: primaryColor }}></div>
                Stay Connected
              </h4>
              
              {/* Newsletter */}
              <div className="mb-6">
                <p className="text-slate-400 text-sm mb-4">
                  Subscribe to our newsletter for updates
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="flex-1 px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:border-transparent text-sm"
                    style={{ focusRing: primaryColor }}
                  />
                  <button
                    className="px-4 py-2.5 rounded-lg font-semibold text-slate-900 hover:scale-105 transition-all shadow-lg"
                    style={{ backgroundColor: primaryColor }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <a href="mailto:contact@transit.com" 
                   className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-white/5 group-hover:bg-white/10 transition-colors">
                    <Mail className="w-5 h-5" style={{ color: primaryColor }} />
                  </div>
                  <span className="text-sm">contact@transit.com</span>
                </a>
                
                <a href="tel:+12124258617" 
                   className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-white/5 group-hover:bg-white/10 transition-colors">
                    <Phone className="w-5 h-5" style={{ color: primaryColor }} />
                  </div>
                  <span className="text-sm">+1 212 425 8617</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © 2025 Transit Logistics Services. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}