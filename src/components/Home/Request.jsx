import mountainImage from "../../assets/mountain.jpg";
import Button from "../ui/Button";
import {User, Mail, Phone,MessageSquare} from 'lucide-react';
export default function Request() {
  return (
    <div
      style={{
        backgroundImage: `url(${mountainImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
      }}
    >
      <div
        id="request-quote"
        className="w-auto sm:w-96 font-text bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-8 rounded-xl relative mx-2 sm:mx-auto md:mx-0 top-28 md:top-40 md:left-40 hover:sm:scale-105 transition-all duration-300"
      >
        <h1 className="text-2xl text-secondary mb-8">Request A Quote</h1>

  <div className="space-y-6 mb-8">
          <div>
            <h2 className="text-lg font-semibold mb-5 text-gray-200 flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[oklch(76.5%_0.177_163.223)] rounded-full"></div>
              About Yourself
            </h2>
            
            {/* Name Input */}
            <div className="relative mb-5">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                placeholder="Your Name"
                className="w-full pl-12 pr-4 py-4 bg-black text-white rounded-xl placeholder-gray-400 border border-gray-800/50 focus:border-[oklch(76.5%_0.177_163.223)] focus:bg-[#0f1810] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[oklch(76.5%_0.177_163.223)]/20"
              />
            </div>

            {/* Email Input */}
            <div className="relative mb-5">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                placeholder="Email Address"
                type="email"
                className="w-full pl-12 pr-4 py-4 bg-black text-white rounded-xl placeholder-gray-400 border border-gray-800/50 focus:border-[oklch(76.5%_0.177_163.223)] focus:bg-[#0f1810] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[oklch(76.5%_0.177_163.223)]/20"
              />
            </div>

            {/* Phone Input */}
            <div className="relative mb-5">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                placeholder="Phone Number (optional)"
                type="tel"
                className="w-full pl-12 pr-4 py-4 bg-black text-white rounded-xl placeholder-gray-400 border border-gray-800/50 focus:border-[oklch(76.5%_0.177_163.223)] focus:bg-[#0f1810] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[oklch(76.5%_0.177_163.223)]/20"
              />
            </div>

            {/* Message Textarea */}
            <div className="relative">
              <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-500" />
              <textarea
                rows="4"
                placeholder="Tell us about your logistics needs..."
                className="w-full pl-12 pr-4 py-4 bg-black text-white rounded-xl placeholder-gray-400 border border-gray-800/50 focus:border-[oklch(76.5%_0.177_163.223)] focus:bg-[#0f1810] transition-all duration-300 focus:outline-none resize-none focus:ring-2 focus:ring-[oklch(76.5%_0.177_163.223)]/20"
              ></textarea>
            </div>
          </div>
        </div>

        {/* <div className="mb-8">
        <h2 className="text-lg mb-4">Moving</h2>
        <input 
          placeholder="Moving From" 
          className="w-full p-4 mb-4 bg-[#121212] text-white rounded-lg placeholder-gray-400"
        />
        <input 
          placeholder="Moving To" 
          className="w-full p-4 bg-[#121212] text-white rounded-lg placeholder-gray-400"
        />
      </div> */}
        <Button to="/contact" type="secondary">
          Get A Quote
        </Button>
      </div>
    </div>
  );
}
