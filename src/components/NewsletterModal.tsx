import React, { useState } from 'react';
import Newsletter from '../assets/images/newsletter.png';
import { GreenButton } from './Button';

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewsletterModal: React.FC<NewsletterModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Email submitted:', email);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl w-full max-w-4xl mx-4 relative">
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <span className="text-2xl">×</span>
        </button>
        
        <div className="flex">
          {/* Left side - Newsletter Image */}
          <div className="w-1/2 rounded-l-2xl hidden md:block">
            <img 
              src={Newsletter} 
              alt="Newsletter pattern"
              className="h-full w-full object-cover rounded-l-2xl"
            />
          </div>
          
          {/* Right side - Content */}
          <div className="p-8 md:w-1/2 w-full">
            <h2 className="text-[#1B224B] text-3xl font-bold mb-4">
              The Latest Finance Tips, Tools & Insights at your fingertips.
            </h2>
            
            <p className="text-gray-600 mb-6">
              Our newsletter delivers the latest insights, tips and tools on all things related to personal finance — from long-term investors, leaders, and economists around the world. Subscribe for monthly money insights.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-center justify-start w-full h-[60px] p-8 rounded-[16px] border-2 border-[#cee0d0] bg-white mb-5">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email"
                    className="w-full p-[10px] text-[14px] rounded-l-[30px] border-none outline-none text-black"
                />
                <GreenButton
                    text="Subscribe"
                    className="hidden lg:block whitespace-nowrap"
                />
              </div>
              <p className="text-xs text-gray-500 mt-4">
                By submitting this information, you agree to receive marketing emails and accept our privacy policy. You can opt-out at any time.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterModal;