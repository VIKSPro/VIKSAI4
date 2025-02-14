import { useState, useEffect, useCallback } from 'react';
import { TrendingUp, Users, Clock, Target, ChevronLeft, ChevronRight, Zap, BarChart } from 'lucide-react';

const successStories = [
  {
    category: 'E-COMMERCE',
    metric: '97.8%',
    label: 'Time Reduction',
    quote: '"Vicks AI helps us to build everything faster and more professional. We have only 2 in our team but it made as if we have a lot of workers."',
    author: 'Sarah Chen',
    role: 'CEO at TechStyle',
    icon: Clock
  },
  {
    category: 'AGENCY',
    metric: '110%',
    label: 'View Increase',
    quote: '"Now 80% of the ads we created perform much better than real-person videos, because they are more engaging and professional."',
    author: 'Michael Ross',
    role: 'Founder at Digital Wave',
    icon: TrendingUp
  },
  {
    category: 'STARTUP',
    metric: '45%',
    label: 'Conversion Rate',
    quote: '"The quality and consistency of the AI avatars helped us scale our video marketing efforts significantly."',
    author: 'David Park',
    role: 'CMO at TechGrowth',
    icon: Target
  },
  {
    category: 'SAAS',
    metric: '78%',
    label: 'Lead Generation',
    quote: '"The personalized AI avatar videos have transformed our outreach strategy. Our response rates have never been higher."',
    author: 'Emma Watson',
    role: 'Head of Marketing at CloudTech',
    icon: Zap
  },
  {
    category: 'EDUCATION',
    metric: '92%',
    label: 'Student Engagement',
    quote: '"Using AI avatars for our online courses has dramatically improved student engagement and completion rates."',
    author: 'Robert Chen',
    role: 'Director at EduTech Global',
    icon: Users
  },
  {
    category: 'FINANCE',
    metric: '67%',
    label: 'Client Acquisition',
    quote: '"Our financial advisors use AI avatars for personalized client communications, resulting in significantly higher conversion rates."',
    author: 'Jessica Martinez',
    role: 'VP at WealthWise',
    icon: BarChart
  },
  {
    category: 'HEALTHCARE',
    metric: '89%',
    label: 'Patient Satisfaction',
    quote: '"AI avatars have revolutionized our patient education and communication processes, leading to better health outcomes."',
    author: 'Dr. James Wilson',
    role: 'Medical Director at HealthFirst',
    icon: Target
  }
];

export default function SuccessSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextStory = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((current) => (current + 1) % successStories.length);
      setIsTransitioning(false);
    }, 500);
  }, []);

  const previousStory = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((current) => 
        current === 0 ? successStories.length - 1 : current - 1
      );
      setIsTransitioning(false);
    }, 500);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextStory, 5000);
    return () => clearInterval(timer);
  }, [nextStory]);

  return (
    <section id="success" className="py-12 sm:py-16 md:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Learn how AI Avatars are helping fuel<br />our customers' success
        </h2>
        <div className="relative mt-16">
          <button
            onClick={previousStory}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/40 sm:bg-black/60 md:bg-black/80 p-2 rounded-full hover:bg-[#75d031]/20 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextStory}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/40 sm:bg-black/60 md:bg-black/80 p-2 rounded-full hover:bg-[#75d031]/20 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="relative min-h-[450px] overflow-visible py-4">
            <div
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                isTransitioning ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <div className="bg-[#75d031]/5 backdrop-blur-lg rounded-xl p-8 border border-[#75d031]/10 max-w-3xl mx-auto my-4">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-medium text-[#75d031] bg-[#75d031]/10 px-3 py-1 rounded-full">
                    {successStories[currentIndex].category}
                  </span>
                  {(() => {
                    const Icon = successStories[currentIndex].icon;
                    return <Icon className="w-6 h-6 text-[#75d031]" />;
                  })()}
                </div>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{successStories[currentIndex].metric}</span>
                  <span className="block text-gray-400 mt-1">{successStories[currentIndex].label}</span>
                </div>
                
                <blockquote className="text-xl text-gray-300 leading-relaxed mb-6">
                  {successStories[currentIndex].quote}
                </blockquote>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#75d031] rounded-full flex items-center justify-center">
                    <span className="text-lg font-semibold">{successStories[currentIndex].author[0]}</span>
                  </div>
                  <div className="ml-3">
                    <div className="font-medium">{successStories[currentIndex].author}</div>
                    <div className="text-sm text-gray-400">{successStories[currentIndex].role}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {successStories.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setCurrentIndex(index);
                    setIsTransitioning(false);
                  }, 500);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'bg-[#75d031] w-6'
                    : 'bg-gray-600 hover:bg-[#75d031]/50'
                }`}
                aria-label={`Go to success story ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}