import { useState, useEffect } from 'react';
import { Brain } from 'lucide-react';

interface LoadingPageProps {
  onLoadingComplete?: () => void;
}

export default function LoadingPage({ onLoadingComplete }: LoadingPageProps) {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing AI...');
  const [isVisible, setIsVisible] = useState(true);

  // Ensure component is mounted before starting animations
  useEffect(() => {
    const duration = 1500; // Slightly longer for smoother transition
    const interval = 10; // Update every 10ms for smooth animation
    const steps = duration / interval;
    let currentStep = 0;

    // Loading text sequence
    const loadingTexts = [
      'Initializing AI...',
      'Almost ready...'
    ];

    // Update loading text every 400ms for faster transitions
    const textInterval = setInterval(() => {
      const textIndex = Math.min(
        Math.floor((currentStep / steps) * loadingTexts.length),
        loadingTexts.length - 1
      );
      setLoadingText(loadingTexts[textIndex]);
    }, 300);

    // Progress bar animation
    const timer = setInterval(() => {
      currentStep += 1;
      // Slightly accelerated progress curve for smoother perception
      const newProgress = Math.min((currentStep / steps) * 100, 100);
      setProgress(newProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        clearInterval(textInterval);
        if (onLoadingComplete) {
          setIsVisible(false);
          onLoadingComplete();
        }
      }
    }, interval);

    // Cleanup intervals on unmount
    return () => {
      clearInterval(timer);
      clearInterval(textInterval);
    };
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center transition-opacity duration-300">
      <div className="relative">
        {/* Glowing background effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px]">
          <div className="absolute inset-0 bg-[#75d031]/30 blur-[50px] rounded-full animate-pulse duration-700" />
        </div>
        
        {/* Loading icon */}
        <div className="relative mb-12">
          <Brain className="w-16 h-16 text-[#75d031] animate-pulse duration-700" />
        </div>
      </div>

      {/* Progress bar container */}
      <div className="w-48 h-1 bg-white/10 rounded-full mt-8 relative overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#75d031] to-[#4a8c13] rounded-full transition-all duration-200 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Progress text */}
      <div className="mt-4 text-[#75d031] font-medium">
        {Math.round(progress)}%
      </div>

      {/* Loading text */}
      <div className="mt-6 text-gray-400">
        <span className="inline-block animate-pulse">
          {loadingText}
        </span>
      </div>

      {/* Decorative gradients */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#75d031]/5 to-transparent animate-pulse duration-2000" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#75d031]/5 to-transparent animate-pulse duration-2000" />
    </div>
  );
}