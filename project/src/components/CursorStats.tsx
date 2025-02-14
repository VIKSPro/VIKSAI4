import { useEffect, useState } from 'react';

interface CursorPosition {
  x: number;
  y: number;
}

interface Stat {
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
}

export default function CursorStats() {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState<Stat | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const stats: Stat[] = [
    { label: 'Conversion Rate', value: '45%', change: '+12%', isPositive: true },
    { label: 'Engagement', value: '78%', change: '+15%', isPositive: true },
    { label: 'View Time', value: '4.2m', change: '+30%', isPositive: true },
    { label: 'Response Rate', value: '92%', change: '+25%', isPositive: true }
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Add slight lag for smooth following
      requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });

      // Show stats when near the top of sections
      const sections = document.querySelectorAll('section');
      let nearSection = false;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const distanceFromTop = Math.abs(e.clientY - (rect.top + window.scrollY));
        
        if (distanceFromTop < 100) {
          nearSection = true;
          // Randomly select a stat when approaching a new section
          const randomStat = stats[Math.floor(Math.random() * stats.length)];
          
          setIsTransitioning(true);
          setTimeout(() => {
            setCurrentStat(randomStat);
            setIsTransitioning(false);
          }, 200);
        }
      });

      setIsVisible(nearSection);
    };

    const handleScroll = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isVisible || !currentStat) return null;

  return (
    <div
      className="fixed pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200"
      style={{
        left: position.x,
        top: position.y,
      }}
    >
      <div
        className={`
          bg-black/90 backdrop-blur-lg rounded-lg p-4 border border-[#75d031]/20
          transition-all duration-300 ease-out
          ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}
        `}
      >
        <div className="text-sm text-gray-400 mb-1">{currentStat.label}</div>
        <div className="text-2xl font-bold text-white mb-1">
          {currentStat.value}
        </div>
        <div className={`text-sm ${currentStat.isPositive ? 'text-[#75d031]' : 'text-red-500'}`}>
          {currentStat.change}
        </div>
      </div>
    </div>
  );
}