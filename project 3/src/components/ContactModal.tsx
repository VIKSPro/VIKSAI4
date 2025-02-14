import { useState } from 'react';
import { X, Send } from 'lucide-react';
import { sendToTelegram } from '../services/telegram';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: string;
}

interface MouseEvent {
  target: EventTarget | null;
}

export default function ContactModal({ isOpen, onClose, selectedPlan }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const success = await sendToTelegram(formData, selectedPlan);
      
      if (success) {
        setSubmitStatus('success');
        setTimeout(() => {
          onClose();
          setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            message: ''
          });
          setSubmitStatus('idle');
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={(e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative bg-black/80 backdrop-blur-xl w-full max-w-lg rounded-xl p-6 sm:p-8 border border-[#75d031]/20 my-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <h3 className="text-2xl font-bold mb-2">Get Started with {selectedPlan}</h3>
        <p className="text-gray-400 mb-6">Fill out the form below and we'll get back to you shortly.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 bg-black/50 border border-[#75d031]/20 rounded-lg focus:outline-none focus:border-[#75d031] text-white text-base"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 bg-black/50 border border-[#75d031]/20 rounded-lg focus:outline-none focus:border-[#75d031] text-white"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-4 py-2 bg-black/50 border border-[#75d031]/20 rounded-lg focus:outline-none focus:border-[#75d031] text-white"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className="w-full px-4 py-2 bg-black/50 border border-[#75d031]/20 rounded-lg focus:outline-none focus:border-[#75d031] text-white"
              value={formData.company}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-4 py-2 bg-black/50 border border-[#75d031]/20 rounded-lg focus:outline-none focus:border-[#75d031] text-white resize-none"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full flex items-center justify-center space-x-2 py-3 px-6 bg-[#75d031] hover:bg-[#4a8c13] text-white rounded-lg transition-all duration-300 ${
              isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            <span>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </span>
            <Send className={`w-4 h-4 ${isSubmitting ? 'animate-pulse' : ''}`} />
          </button>
          
          {submitStatus === 'success' && (
            <p className="mt-4 text-center text-green-500">
              Message sent successfully!
            </p>
          )}
          
          {submitStatus === 'error' && (
            <p className="mt-4 text-center text-red-500">
              Failed to send message. Please try again or contact us at info@viksproduction.com
            </p>
          )}
        </form>
      </div>
    </div>
  );
}