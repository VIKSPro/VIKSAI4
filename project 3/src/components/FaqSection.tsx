import { useState, useCallback } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'How realistic are the AI avatars?',
    answer: 'Our AI avatars are highly realistic, leveraging cutting-edge technology to create natural-looking facial expressions, movements, and speech patterns. They are designed to be indistinguishable from real video content in most use cases.'
  },
  {
    question: 'How long does it take to create an AI avatar?',
    answer: 'The process typically takes 2-3 business days from filming to having your first AI avatar ready for use. This includes the initial recording, processing, and fine-tuning to ensure the highest quality output.'
  },
  {
    question: 'Can I use the AI avatars for commercial purposes?',
    answer: 'Yes, all our plans include commercial usage rights. You can use the AI avatars in your marketing campaigns, social media content, and other business communications.'
  },
  {
    question: 'What types of videos can I create with the AI avatars?',
    answer: 'You can create a wide range of videos including product demonstrations, marketing messages, educational content, social media posts, and personalized customer communications. Our team can help you determine the best approach for your specific needs.'
  },
  {
    question: 'Do you provide script writing assistance?',
    answer: 'Yes, we offer script writing assistance to help you create engaging and effective video content. Our team can help you optimize your message for maximum impact while maintaining a natural, conversational tone.'
  },
  {
    question: 'What languages are supported?',
    answer: 'We currently support English with native-speaking AI avatars. Additional languages are being developed and will be available soon. Contact us for specific language requirements.'
  }
] as const;

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = useCallback((index: number) => {
    setOpenIndex(current => current === index ? null : index);
  }, []);

  return (
    <section id="faq" className="py-12 sm:py-16 md:py-20 bg-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-4">
          <HelpCircle className="w-12 h-12 text-[#75d031]" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Commonly Asked Questions
        </h2>
        <p className="text-xl text-gray-300 text-center mb-16">
          Find answers to frequently asked questions about our AI avatar service
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-[#75d031]/20 rounded-lg overflow-hidden hover:border-[#75d031]/40 transition-colors duration-300"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-[#75d031]/10 transition-colors duration-300"
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-[max-height,padding] duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 py-4' : 'max-h-0'
                }`}
              >
                <div className="px-6">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-400">
            Still have questions?{' '}
            <a
              href="mailto:info@viksproduction.com"
              className="text-[#75d031] hover:text-[#4a8c13] transition-colors"
            >
              Contact us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}