import { ArrowRight, Play } from 'lucide-react';
import { useState, useEffect } from 'react';

const VIDEO_SOURCES = [
  {
    src: 'https://cdn.coverr.co/videos/coverr-neural-network-visualization-2527/1080p.mp4',
    type: 'video/mp4'
  }
];

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-16 bg-transparent">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80 z-10" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-110 will-change-transform"
          onPlay={() => setIsPlaying(true)}
        >
          {VIDEO_SOURCES.map((source, index) => (
            <source key={index} src={source.src} type={source.type} />
          ))}
        </video>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center transform transition-all duration-1000 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`} className="py-12 sm:py-20">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#75d031] to-[#4a8c13] drop-shadow-2xl" itemScope itemType="https://schema.org/WebPage">
            Transform Your Videos<br />with AI Avatars
          </h1>
          
          <p className={`text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            Create engaging video content with ultra-realistic AI avatars. Perfect for businesses, startups, and marketers looking to scale their video production.
          </p>
          
          <a
            href="#pricing"
            className={`inline-flex items-center px-8 py-4 bg-[#75d031] text-white rounded-full text-lg font-semibold group hover:bg-[#4a8c13] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#75d031]/20 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}