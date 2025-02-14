import { MessageCircle, Video, Presentation, Share2 } from 'lucide-react';

export default function HowToSection() {
  const useCases = [
    {
      icon: MessageCircle,
      title: 'Personalized marketing',
      description: 'Develop personalized video messages for customer outreach, like welcome messages or special promotions.'
    },
    {
      icon: Presentation,
      title: 'Brand storytelling',
      description: 'Use AI avatars to narrate your brand\'s story or mission, enhancing emotional connection with your audience.'
    },
    {
      icon: Video,
      title: 'Social media ads',
      description: 'Create high-converting video ads for LinkedIn, X, Facebook, Instagram, TikTok, YouTube, and Snapchat.'
    },
    {
      icon: Share2,
      title: 'Social media content',
      description: 'Produce organic social media videos to engage your followers. Create instructionals and how-to videos.'
    }
  ];

  return (
    <section id="how" className="py-12 sm:py-16 md:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          How to use AI Avatars in your video marketing
        </h2>
        <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
          Get inspired by the best performing use cases and techniques to use in your video marketing campaigns.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-[#75d031]/5 backdrop-blur-lg rounded-xl p-8 border border-[#75d031]/10 hover:border-[#75d031]/20 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#75d031]/20 rounded-lg flex items-center justify-center mb-6">
                <useCase.icon className="w-6 h-6 text-[#75d031]" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{useCase.title}</h3>
              <p className="text-gray-400 leading-relaxed">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}