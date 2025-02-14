import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Marketing Director",
    company: "TechGrowth Solutions",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    text: "The AI avatars have revolutionized our marketing approach. We've seen a 300% increase in engagement since implementing these videos in our campaigns. The quality and realism are absolutely outstanding."
  },
  {
    id: 2,
    name: "Michael Ross",
    role: "CEO",
    company: "Digital Wave Agency",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    text: "As an agency handling multiple clients, the ability to create professional video content at scale has been a game-changer. Our clients are amazed by the results, and we've significantly reduced production time and costs."
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Content Strategist",
    company: "InnovateX",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    text: "The personalization capabilities are incredible. We can now create tailored video messages for different market segments without the need for multiple filming sessions. This has transformed our content strategy."
  },
  {
    id: 4,
    name: "David Park",
    role: "Founder",
    company: "StartupBoost",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    text: "For a startup, this service is invaluable. We can maintain a professional video presence without the massive overhead of traditional video production. The ROI has been exceptional."
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Sales Director",
    company: "GrowthForce",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    text: "Our sales team uses AI avatars for personalized outreach, and the response rates have skyrocketed. The natural expressions and voice modulation make the videos incredibly engaging."
  },
  {
    id: 6,
    name: "James Wilson",
    role: "E-commerce Manager",
    company: "ShopTech Pro",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    text: "We've integrated AI avatar videos across our product pages and seen a 45% increase in conversion rates. The ability to explain products through video without constant reshoots is phenomenal."
  },
  {
    id: 7,
    name: "Anna Martinez",
    role: "Creative Director",
    company: "VisualPeak Studios",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    text: "The consistency in quality across all videos is remarkable. We can produce high-end content for our clients without worrying about lighting, location, or talent availability. It's revolutionary."
  }
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextTestimonial = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((current) => (current + 1) % testimonials.length);
      setIsTransitioning(false);
    }, 500);
  }, []);

  const previousTestimonial = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((current) => 
        current === 0 ? testimonials.length - 1 : current - 1
      );
      setIsTransitioning(false);
    }, 500);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, [nextTestimonial]);

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          What Our Customers Say
        </h2>

        <div className="relative">
          <button
            onClick={previousTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/80 p-2 rounded-full hover:bg-[#75d031]/20 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/80 p-2 rounded-full hover:bg-[#75d031]/20 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="relative h-[400px] overflow-hidden">
            <div
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                isTransitioning ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <div className="bg-[#75d031]/5 backdrop-blur-lg rounded-xl p-8 border border-[#75d031]/10 max-w-3xl mx-auto">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    loading="lazy"
                    width="64"
                    height="64"
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-gray-400">
                      {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                    </p>
                    <div className="flex items-center mt-1">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-[#75d031] text-[#75d031]"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <blockquote className="text-xl text-gray-300 leading-relaxed">
                  "{testimonials[currentIndex].text}"
                </blockquote>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
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
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}