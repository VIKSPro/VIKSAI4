import { useState } from 'react';
import { Check, Mail } from 'lucide-react';
import ContactModal from '../components/modals/ContactModal';

export default function PricingSection() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  const plans = [
    {
      name: 'Starter',
      avatars: 1,
      videos: 10,
      price: 1350,
      originalPrice: 1500,
      features: [
        '1 AI Avatar creation',
        '10 edited videos',
        'Commercial usage rights',
        'Priority support',
        'Video script assistance'
      ]
    },
    {
      name: 'Professional',
      avatars: 3,
      videos: 30,
      price: 3900,
      originalPrice: 4200,
      features: [
        '3 AI Avatar creations',
        '30 edited videos',
        'Commercial usage rights',
        'Priority support',
        'Video script assistance',
        'Custom branding',
        'Advanced editing options'
      ]
    },
    {
      name: 'Business',
      avatars: 5,
      videos: 60,
      price: 6900,
      originalPrice: 7600,
      features: [
        '5 AI Avatar creations',
        '60 edited videos',
        'Commercial usage rights',
        'Priority support',
        'Video script assistance',
        'Custom branding',
        'Advanced editing options',
        'Dedicated account manager'
      ]
    },
    {
      name: 'Enterprise',
      avatars: 5,
      videos: 90,
      price: 9500,
      originalPrice: 9850,
      features: [
        '5 AI Avatar creations',
        '90 edited videos',
        'Commercial usage rights',
        'Priority support',
        'Video script assistance',
        'Custom branding',
        'Advanced editing options',
        'Dedicated account manager',
        'Custom integration support'
      ]
    }
  ];

  return (
    <section id="pricing" className="py-12 sm:py-16 md:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Our Pricing
        </h2>
        <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
          Choose the perfect plan for your video marketing needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8 md:max-w-3xl lg:max-w-5xl xl:max-w-none mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-[#75d031]/5 backdrop-blur-lg rounded-xl p-4 md:p-6 xl:p-8 border border-[#75d031]/10 hover:border-[#75d031]/20 transition-all duration-300"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4">{plan.name}</h3>
              
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-3xl md:text-4xl font-bold">${plan.price}</span>
                  <span className="ml-2 text-gray-400 line-through">${plan.originalPrice}</span>
                </div>
                <p className="text-sm text-gray-400 mt-2">
                  {plan.avatars} avatar{plan.avatars > 1 ? 's' : ''} + {plan.videos} videos
                </p>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-[#75d031] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm md:text-base">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className="w-full py-3 px-6 rounded-lg bg-[#75d031] text-white font-semibold hover:bg-[#4a8c13] transition-colors duration-300"
                onClick={() => {
                  setSelectedPlan(plan.name);
                  setIsContactModalOpen(true);
                }}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-8 bg-[#75d031]/5 backdrop-blur-lg rounded-xl p-6 md:p-8 border border-[#75d031]/10 hover:border-[#75d031]/20 transition-all duration-300 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="w-full lg:w-2/3">
              <h3 className="text-xl md:text-2xl font-bold mb-4">Need a Custom Solution?</h3>
              <p className="text-gray-300 text-sm md:text-base mb-6">
                Looking for something specific? We offer tailored solutions for:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-[#75d031] mr-2 mt-1" />
                  <span className="text-gray-300 text-sm md:text-base">Enterprise-scale video production</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-[#75d031] mr-2 mt-1" />
                  <span className="text-gray-300 text-sm md:text-base">Multi-language support</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-[#75d031] mr-2 mt-1" />
                  <span className="text-gray-300 text-sm md:text-base">Custom AI avatar development</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-[#75d031] mr-2 mt-1" />
                  <span className="text-gray-300 text-sm md:text-base">API integration</span>
                </li>
              </ul>
            </div>
            
            <div className="w-full lg:w-1/3 text-center lg:text-left">
              <p className="text-lg md:text-xl font-semibold mb-6">Contact us to discuss your needs</p>
              <button
                onClick={() => {
                  setSelectedPlan('Custom Solution');
                  setIsContactModalOpen(true);
                }}
                className="w-full md:w-auto inline-flex items-center justify-center px-8 py-4 bg-[#75d031] hover:bg-[#4a8c13] text-white rounded-lg transition-colors duration-300 mb-6"
              >
                <Mail className="w-5 h-5 mr-2" />
                <span>Get in Touch</span>
              </button>
              <p className="text-sm text-gray-400">
                Our team will get back to you within 24 hours
              </p>
            </div>
          </div>
        </div>
        
        <ContactModal
          isOpen={isContactModalOpen}
          onClose={() => setIsContactModalOpen(false)}
          selectedPlan={selectedPlan}
        />
      </div>
    </section>
  );
}