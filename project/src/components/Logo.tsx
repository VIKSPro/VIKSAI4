import { Brain, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Logo() {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex items-center gap-2 z-[9999] isolate">
      {/* Logo background glow */}
      <div className="absolute -inset-2 bg-[#75d031]/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Brain icon with animations */}
      <div className="relative z-[9999]">
        <div className={`absolute inset-0 bg-[#75d031]/20 blur-xl rounded-full transition-all duration-500 ${
          isAnimating ? 'scale-150 opacity-0' : 'scale-100 opacity-100'
        }`} />
        <Brain 
          className={`w-8 h-8 text-[#75d031] relative transition-transform duration-500 ${
            isAnimating ? 'scale-110' : 'scale-100'
          }`}
        />
        
        {/* Energy particles */}
        <div className="absolute -inset-1 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <Zap
              key={i}
              className={`absolute w-3 h-3 text-[#75d031] transform transition-all duration-500 ${
                isAnimating 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-0'
              }`}
              style={{
                left: `${50 + Math.cos(i * (Math.PI * 2) / 3) * 20}%`,
                top: `${50 + Math.sin(i * (Math.PI * 2) / 3) * 20}%`,
                transform: `translate(-50%, -50%) rotate(${i * 120}deg)`,
                transitionDelay: `${i * 100}ms`
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Text with animations */}
      <div className="flex items-baseline relative z-[9999]">
        <span className={`font-bold text-2xl tracking-wide transition-all duration-500 ${
          isAnimating ? 'text-[#75d031]' : 'text-white'
        }`}>
          VIKS
        </span>
        <span className={`ml-1.5 font-semibold transition-all duration-500 ${
          isAnimating ? 'text-white' : 'text-[#75d031]'
        }`}>
          AI
        </span>
      </div>
    </div>
  );
}