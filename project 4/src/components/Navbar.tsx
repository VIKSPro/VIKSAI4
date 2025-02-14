import { useState, useMemo, useEffect } from 'react';
import { Facebook, Instagram, Linkedin, Music2 } from 'lucide-react';
import Logo from './Logo';

const isHomePage = () => window.location.pathname === '/';

const socialLinks = [
  {
    icon: Facebook,
    href: 'https://facebook.com/viksai',
    label: 'Facebook'
  },
  {
    icon: Instagram,
    href: 'https://instagram.com/viksai',
    label: 'Instagram'
  },
  {
    icon: Linkedin,
    href: 'https://linkedin.com/company/viksai',
    label: 'LinkedIn'
  },
  {
    icon: Music2,
    href: 'https://tiktok.com/@viksai',
    label: 'TikTok'
  }
] as const;

interface NavbarProps {
  hidden?: boolean;
  onNavigate: (sectionId: string) => void;
}

export default function Navbar({ hidden = false, onNavigate }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (hidden) {
    return (
      <nav className="fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center space-x-2">
              <Logo />
            </a>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-lg z-[9999] border-b border-[#75d031]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="group relative flex items-center space-x-2 z-[9999] isolate">
              <Logo />
            </a>
          </div>
          
          <div className={`hidden md:block ${isMounted ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={() => onNavigate('#why')} className="text-gray-300 hover:text-white hover:bg-[#75d031]/10 px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 whitespace-nowrap">Why AI Avatars</button>
              <button onClick={() => onNavigate('#how')} className="text-gray-300 hover:text-white hover:bg-[#75d031]/10 px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 whitespace-nowrap">How to Use</button>
              <button onClick={() => onNavigate('#success')} className="text-gray-300 hover:text-white hover:bg-[#75d031]/10 px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 whitespace-nowrap">Success Stories</button>
              <button onClick={() => onNavigate('#portfolio')} className="text-gray-300 hover:text-white hover:bg-[#75d031]/10 px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 whitespace-nowrap">Portfolio</button>
              <button onClick={() => onNavigate('#pricing')} className="text-gray-300 hover:text-white hover:bg-[#75d031]/10 px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 whitespace-nowrap">Pricing</button>
              <button onClick={() => onNavigate('#faq')} className="text-gray-300 hover:text-white hover:bg-[#75d031]/10 px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 whitespace-nowrap">FAQ</button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div 
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:hidden fixed inset-x-0 top-16 bg-black/95 backdrop-blur-lg transition-all duration-300 ease-in-out z-[9998] max-h-[calc(100vh-4rem)] overflow-y-auto`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <button 
            onClick={() => { 
              onNavigate('#why');
              setIsMenuOpen(false);
            }} 
            className="text-gray-300 hover:text-white hover:bg-[#75d031]/10 block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
          >
            Why AI Avatars
          </button>
          <button 
            onClick={() => { 
              onNavigate('#how');
              setIsMenuOpen(false);
            }} 
            className="text-gray-300 hover:text-white hover:bg-[#75d031]/10 block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
          >
            How to Use
          </button>
          <button 
            onClick={() => { 
              onNavigate('#success');
              setIsMenuOpen(false);
            }} 
            className="text-gray-300 hover:text-white hover:bg-[#75d031]/10 block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
          >
            Success Stories
          </button>
          <button 
            onClick={() => { 
              onNavigate('#portfolio');
              setIsMenuOpen(false);
            }} 
            className="text-gray-300 hover:text-white hover:bg-[#75d031]/10 block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
          >
            Portfolio
          </button>
          <button 
            onClick={() => { 
              onNavigate('#pricing');
              setIsMenuOpen(false);
            }} 
            className="text-gray-300 hover:text-white hover:bg-[#75d031]/10 block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
          >
            Pricing
          </button>
          <button 
            onClick={() => { 
              onNavigate('#faq');
              setIsMenuOpen(false);
            }} 
            className="text-gray-300 hover:text-white hover:bg-[#75d031]/10 block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
          >
            FAQ
          </button>
          
          <div className="mt-6 pt-6 border-t border-[#75d031]/10">
            <div className="px-3">
              <p className="text-sm text-gray-400 mb-4">Follow us on social media:</p>
              <div className="flex space-x-6 pb-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#75d031] transition-colors duration-300 p-2"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}