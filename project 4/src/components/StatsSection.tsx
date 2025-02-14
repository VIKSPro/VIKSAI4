import { useEffect, useRef, useState } from 'react';
import { TrendingUp, MousePointer } from 'lucide-react';

interface Stat {
  label: string;
  value: number;
  change: number;
  suffix: string;
}

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(false);

  const stats: Stat[] = [
    { label: 'Views', value: 4408, change: 52, suffix: '' },
    { label: 'Clicks', value: 2188, change: 48, suffix: '' },
    { label: 'Conversion', value: 12.5, change: 35, suffix: '%' },
    { label: 'Revenue', value: 45.2, change: 42, suffix: 'K' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        setMousePosition({ x, y });
        setCursorVisible(true);
      } else {
        setCursorVisible(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-center mb-4">
          <TrendingUp className="w-12 h-12 text-[#75d031]" />
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Real-time Analytics
        </h2>
        
        <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
          Track your video performance with our advanced analytics dashboard
        </p>

        <div className="relative bg-black/50 backdrop-blur-xl rounded-2xl p-8 border border-[#75d031]/20">
          {/* Interactive cursor effect */}
          {cursorVisible && (
            <div
              className="absolute pointer-events-none transition-transform duration-200 ease-out"
              style={{
                left: mousePosition.x,
                top: mousePosition.y,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <div className="w-32 h-32 rounded-full bg-[#75d031]/10 animate-ping" />
              <div className="absolute inset-0 w-32 h-32 rounded-full border-2 border-[#75d031]/20" />
              <MousePointer className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-[#75d031]" />
            </div>
          )}

          {/* Stats grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`
                  relative overflow-hidden rounded-xl bg-black/40 p-6 border border-[#75d031]/10
                  transform transition-all duration-500
                  ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
                `}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative z-10">
                  <div className="text-sm text-gray-400 mb-2">{stat.label}</div>
                  <div className="text-3xl font-bold mb-2">
                    {isVisible ? stat.value.toLocaleString() : '0'}
                    {stat.suffix}
                  </div>
                  <div className="flex items-center text-[#75d031]">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    <span>+{stat.change}%</span>
                  </div>
                </div>

                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#75d031]/5 to-transparent" />
              </div>
            ))}
          </div>

          {/* Background line graph */}
          <svg
            className="absolute inset-0 w-full h-full opacity-20"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
          >
            <path
              d="M0,50 Q25,45 50,55 T100,50"
              stroke="#75d031"
              strokeWidth="0.5"
              fill="none"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}