import { useEffect, useState, useCallback } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  direction: number;
}

export default function Particles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  const generateParticles = useCallback(() => {
    const particleCount = Math.min(50, window.innerWidth * window.innerHeight / 20000);
    return Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 0.5 + 0.2,
      opacity: Math.random() * 0.5 + 0.1,
      direction: Math.random() * Math.PI * 2
    }));
  }, []);

  useEffect(() => {
    setParticles(generateParticles());

    const handleResize = () => {
      setParticles(generateParticles());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [generateParticles]);

  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      setParticles(prevParticles =>
        prevParticles.map(particle => {
          const movement = particle.speed * deltaTime * 30;
          let newX = particle.x + Math.cos(particle.direction) * movement;
          let newY = particle.y + Math.sin(particle.direction) * movement;

          // Wrap around screen edges
          if (newX < -10) newX = 110;
          if (newX > 110) newX = -10;
          if (newY < -10) newY = 110;
          if (newY > 110) newY = -10;

          return {
            ...particle,
            x: newX,
            y: newY
          };
        })
      );

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute bg-[#75d031] rounded-full blur-[1px] will-change-transform"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            transform: 'translate3d(0, 0, 0)',
            backfaceVisibility: 'hidden'
          }}
        />
      ))}
    </div>
  );
}