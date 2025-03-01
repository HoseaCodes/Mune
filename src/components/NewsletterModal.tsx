import React, { useState } from 'react';
import Newsletter from '../assets/images/newsletter.png';
import { GreenButton } from './Button';

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewsletterModal: React.FC<NewsletterModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState('');
  
  const submitToHubSpot = async (email: string) => {
    const portalId = '48431061';
    const formGuid = '2eb20885-261e-4be4-8e73-677871b8dcdf';

    const hubspotData = {
      fields: [
        {
          name: "email",
          value: email
        },
      ],
      context: {
        pageUri: window.location.href,
        pageName: document.title
      }
    };

    const response = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(hubspotData)
      }
    );

    if (!response.ok) {
      throw new Error('Failed to submit to HubSpot');
    }

    return await response.json();
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const onClickSubscribe = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      const valid = validateEmail(email);
      if (!valid) {
        setSubscriptionStatus('Invalid email');
        return;
      }
      await submitToHubSpot(email);
      setSubscriptionStatus('Thank you, you have subscribed successfully!');
  
      // Wait for 2 seconds before resetting and closing
      setTimeout(() => {
        setEmail('');
        setSubscriptionStatus('');
        onClose(); // Close after the 2 seconds delay
      }, 2000);
    } catch (error) {
      setSubscriptionStatus('Failed to subscribe');
    }
  };
  
  if (!isOpen) return null;

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
            
            <form onSubmit={onClickSubscribe} className="space-y-4">
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
              {subscriptionStatus && (
                <p className={`text-2xl text-center font-semibold mt-4 ${subscriptionStatus.includes('successful') ? 'text-green-500' : 'text-red-500'}`}>
                  {subscriptionStatus}
                </p>
              )}
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