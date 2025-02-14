import { useEffect, useState, useCallback } from 'react';
import { Play } from 'lucide-react';
import VideoModal from '../components/modals/VideoModal';

const portfolioItems = [
  {
    title: 'Product Showcase',
    description: 'Professional AI avatar presenting a new tech product',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=400&h=600'
  },
  {
    title: 'Company Overview',
    description: 'Corporate presentation with multiple AI avatars',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=400&h=600'
  },
  {
    title: 'Customer Testimonial',
    description: 'AI-powered customer success story',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?auto=format&fit=crop&q=80&w=400&h=600'
  },
  {
    title: 'Educational Content',
    description: 'Tutorial video with AI instructor',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=80&w=400&h=600'
  },
  {
    title: 'Conecnt for linkedin',
    description: 'Tutorial video with AI instructor',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=80&w=400&h=600'
  }
];

export default function PortfolioSection() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedVideo(null);
    setIsModalOpen(false);
  };

  return (
    <section id="portfolio" className="py-12 sm:py-16 md:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Our Portfolio
        </h2>
        <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
          Explore our collection of AI-powered video content
        </p>

        <div className="relative">
          {/* Gradient fade effect on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/40 sm:from-black/60 md:from-black/80 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black/40 sm:from-black/60 md:from-black/80 to-transparent z-10" />
          
          {/* Scrollable container */}
          <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative flex-none w-[280px] sm:w-[240px] snap-center overflow-hidden rounded-xl bg-[#75d031]/5 border border-[#75d031]/10 hover:border-[#75d031]/20 transition-all duration-300"
            >
              <div className="aspect-[9/16] relative overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300 brightness-[0.8]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => openModal(item.videoUrl)}
                    className="bg-[#75d031] hover:bg-[#4a8c13] text-white p-4 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"
                  >
                    <Play className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-3">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>

      <VideoModal
        videoUrl={selectedVideo || ''}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
}