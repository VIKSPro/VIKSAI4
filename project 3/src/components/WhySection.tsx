import { Brain, Target, Heart, Video } from 'lucide-react';

export default function WhySection() {
  const benefits = [
    {
      icon: Target,
      title: '91.7% More Attention',
      description: 'Ads featuring a person\'s face get significantly more attention than those without.'
    },
    {
      icon: Brain,
      title: 'Better Brand Recall',
      description: '67% of brands using face-based ads were remembered by viewers.'
    },
    {
      icon: Heart,
      title: 'Emotional Connection',
      description: 'Faces create stronger emotional bonds with your potential customers.'
    },
    {
      icon: Video,
      title: 'Increased Trust',
      description: 'Videos with people are perceived as more authentic and trustworthy.'
    }
  ];

  return (
    <section id="why" className="py-12 sm:py-16 md:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Why use AI Avatars in your video ads?
        </h2>
        <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
          The human brain is biologically wired to process faces at least twice as fast as other stimuli.
          And ads with faces are 11 times more likely to get noticed.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-[#75d031]/5 backdrop-blur-lg rounded-xl p-6 transform hover:scale-105 transition-all duration-300 border border-[#75d031]/10 hover:border-[#75d031]/20"
            >
              <div className="w-12 h-12 bg-[#75d031] rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}