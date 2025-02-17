import React from 'react';
import Logo from '../assets/logo/logo-white.svg';
import FbIcon from '../assets/icons/fb.svg';
import InstaIcon from '../assets/icons/insta.svg';
import TiktokIcon from '../assets/icons/tiktok.svg';
// import WhatsappIcon from '../assets/icons/whatsapp.svg';
// import AppleIcon from './AppleIcon';
// import GoogleIcon from './GoogleIcon';

const Footer: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [subscriptionStatus, setSubscriptionStatus] = React.useState('');

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

  const onClickSubscribe = async () => {
    try {
      const valid = validateEmail(email)
      if (!valid) {
        setSubscriptionStatus('Invalid email');
        return;
      }
      await submitToHubSpot(email);
      setSubscriptionStatus('Subscribed successfully');

      // Wait for 2 seconds before resetting and closing
      setTimeout(() => {
        setEmail('');
        setSubscriptionStatus('');
      }, 1500);
    } catch (error) {
      setSubscriptionStatus('Failed to subscribe');
    }
  }

  return (
    <footer className="rounded-tl-[32px] md:rounded-tl-[48px] mt-[120px] rounded-tr-[32px] md:rounded-tr-[48px] p-10">
      <img
        src={Logo}
        className="md:hidden block w-[85px]"
        alt="logo"
      />
      <div className="flex justify-center items-center flex-col gap-8 pt-10 md:pt-24">
        <div className="text-[#F2F7F4] max-w-7xl text-[32px] text-center leading-9 md:text-6xl font-bold">
          The Latest Finance Tips, Tools & Insights at your fingertips.
        </div>
        <p className="text-[#F2F7F4] text-[20px] pt-10 max-w-7xl lg:pl-10 lg:pr-10 text-left md:text-2xl font-normal">
          Our newsletter delivers the latest insights, tips and tools on all things 
          related to personal finance — from long-term investors, leaders, and economists 
          around the world. Subscribe for monthly money insights.
        </p>
        <form className="hidden md:block"
         onSubmit={(e) => {
          e.preventDefault();
          onClickSubscribe();
        }}
        >
          <div className="border-2 border-neutral-300 bg-stone-100 flex justify-between items-center w-[412px] rounded-[14px] h-12">
            <input
              className="w-webkit-fill-available appearance-none placeholder:text-sm placeholder:text-black  bg-transparent rounded py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              placeholder="Enter your email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button 
            type="submit"
            className="button-three w-[131px] h-[32px] text-[12px] me-2 text-stone-100 font-semibold rounded-xl hover:shadow-green-500/50 shadow-green-500/80 shadow-md">
              Subscribe
            </button>
          </div>
        </form>
        {subscriptionStatus && (
          <p
            className={`text-2xl text-center font-semibold mt-4 ${
              subscriptionStatus === 'Subscribed successfully' ? 'text-white' : 'text-red-500'
            } 
            sm:block hidden`}
          >
            {subscriptionStatus}
          </p>
        )}
        <p className="text-[#F2F7F4] text-[16px] max-w-4xl text-left md:text-xl font-normal">
          By submitting this information, you agree to receive marketing emails from 
          Goldman Sachs and accept our <u>privacy policy</u>. You can opt-out at any time.
        </p>
        <form className="w-[275px] md:hidden" 
          onSubmit={(e) => {
            e.preventDefault();
            onClickSubscribe();
          }}
        >
          <div className="border-2 bg-white px-2 border-neutral-300 flex justify-start gap-2 items-center rounded-[12px] h-[44px]">
            {/* <img src={WhatsappIcon} alt="" /> */}
            <input
              className="w-webkit-fill-available appearance-none placeholder:text-sm placeholder:text-black  bg-transparent rounded  text-black leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              placeholder="Enter your email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button 
              type="submit"
              className="button-three p-2 w-[131px] h-[32px] text-[12px] me-2 text-stone-100 font-semibold rounded-xl hover:shadow-green-500/50 shadow-green-500/80 shadow-md">
              Subscribe
            </button>
          </div>
        </form>
        {subscriptionStatus && (
            <p className={`text-2xl text-center font-semibold mt-4 ${subscriptionStatus === 'Subscribed successfully' ? 'text-white' : 'text-red-500'}`}>
              {subscriptionStatus}
            </p>
          )}
      </div>
      <div className="md:grid grid-cols-2 mt-4 md:mt-28">
        <div className="flex flex-col gap-8 justify-start">
          <img
            src={Logo}
            className="hidden md:block w-[190px]"
            alt="logo"
          />
          <div className="text-[22px] md:text-[28px] md:text-start text-center font-bold text-stone-100">
            App Coming Soon!
          </div>
          {/* <div className="gap-3 items-center md:flex md:hidden">
            <GoogleIcon />
            <AppleIcon />
          </div> */}
        </div>
        <div className="flex flex-col gap-8 mt-9 md:mt-0 items-start md:items-end">
          <div className="md:flex gap-12">
            <div className="hidden md:flex flex-col gap-6">
              <div className="text-[20px] text-stone-100 font-semibold">
                Legal
              </div>
              <a
                href="#/"
                className="text-[20px] text-stone-100 font-normal"
              >
                Terms of use
              </a>
              <a
                href="#/"
                className="text-[20px] text-stone-100 font-normal"
              >
                Privacy Policy
              </a>
              <a
                href="#/"
                className="text-[20px] text-stone-100 font-normal"
              >
                Security Policy
              </a>
              <a
                href="#/"
                className="text-[20px] text-stone-100 font-normal"
              >
                Cookie Settings
              </a>
            </div>
            <div className="flex flex-col gap-4 md:gap-6">
              <div className="text-[20px] hidden md:block text-stone-100 font-semibold">
                Navigation
              </div>
              <a
                href="/"
                className="text-[20px] text-stone-100 font-normal"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-[20px] text-stone-100 font-normal"
              >
                About
              </a>
              <a
                href="/contact"
                className="text-[20px] text-stone-100 font-normal"
              >
                Contact
              </a>
              <a
                href="/subscribe"
                className="hidden text-[20px] text-stone-100 font-normal"
              >
                Subscribe
              </a>
            </div>
            <div className="flex flex-col gap-6 mt-16 md:mt-0">
              <div className="hidden md:flex text-[20px] text-stone-100 font-semibold">
                Subscribe
              </div>
              <div className="flex items-center justify-start gap-3">
                <a
                  href="https://www.facebook.com/profile.php?id=61566551524734"
                  className="text-[20px] text-stone-100 font-normal"
                >
                  <img src={FbIcon} alt="" />
                </a>
                <a
                  href="https://www.instagram.com/mun_e_solutions/"
                  className="text-[20px] text-stone-100 font-normal"
                >
                  <img src={InstaIcon} alt="" />
                </a>
                <a
                  href="https://www.tiktok.com/@mun_e_solutions"
                  className="text-[20px] text-stone-100 font-normal"
                >
                  <img src={TiktokIcon} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
