import { useState } from 'react';
import { ArrowLeft, Brain, Mail } from 'lucide-react';
import Logo from './Logo';

export default function NotFound() {
  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const path = e.currentTarget.getAttribute('href') || '/';
    window.history.pushState({}, '', path);
    window.dispatchEvent(new Event('pushstate'));
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#75d031]/20 via-black to-black text-white flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-black/50 to-black pointer-events-none" />
      
      <div className="container mx-auto px-4 py-6">
        <div className="mb-12">
          <a href="/" onClick={handleHomeClick} className="inline-block">
            <Logo />
          </a>
        </div>

        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-300px)] text-center max-w-4xl mx-auto">
          <div className="relative w-full mb-12">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]">
              <div className="absolute inset-0 bg-[#75d031]/30 blur-[100px] rounded-full animate-pulse" />
            </div>
            
            <div className="relative flex items-center justify-center mb-12">
              <div className="absolute inset-0 bg-gradient-to-r from-[#75d031]/20 to-[#4a8c13]/20 blur-2xl rounded-full" />
              <Brain className="relative w-32 h-32 text-[#75d031] animate-float transform-gpu" />
            </div>

            <div className="relative z-10">
              <h1 className="text-[120px] md:text-[150px] font-bold leading-none bg-clip-text text-transparent bg-gradient-to-r from-[#75d031] to-[#4a8c13] animate-pulse">
                404
              </h1>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-white/90">
                Lost in the Digital Dimension
              </h2>
              <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                Our AI is scratching its virtual head! The page you're looking for seems to have wandered off into the digital void.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 mb-12">
            <a
              href="/"
              onClick={handleHomeClick}
              className="group inline-flex items-center justify-center px-8 py-4 bg-[#75d031] hover:bg-[#4a8c13] text-white rounded-full transition-all duration-300 min-w-[220px] relative overflow-hidden transform hover:scale-105"
            >
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <ArrowLeft className="w-5 h-5 mr-2 relative" />
              <span className="relative">Back to Homepage</span>
            </a>
            <a
              href="mailto:info@viksproduction.com"
              className="group inline-flex items-center justify-center px-8 py-4 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-300 min-w-[220px] relative overflow-hidden border border-[#75d031]/20 hover:border-[#75d031]/40"
            >
              <Mail className="w-5 h-5 mr-2" />
              <span>Contact Support</span>
            </a>
          </div>

          <div className="mt-12 pt-8">
            <p className="text-gray-400">
              Quick Links:
              <a href="#why" onClick={handleHomeClick} className="inline-flex items-center text-[#75d031] hover:text-[#4a8c13] ml-4 mr-6 transition-colors">
                Why AI Avatars
              </a>
              <a href="#portfolio" onClick={handleHomeClick} className="inline-flex items-center text-[#75d031] hover:text-[#4a8c13] mr-6 transition-colors">
                Portfolio
              </a>
              <a href="#pricing" onClick={handleHomeClick} className="inline-flex items-center text-[#75d031] hover:text-[#4a8c13] transition-colors">
                Pricing
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}