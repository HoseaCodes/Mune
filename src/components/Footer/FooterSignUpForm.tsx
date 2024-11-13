import React from 'react';
import useForm from '../../hooks/useForm';
import { signUpValidations } from '../../constants/validationSchemas';
import WhatsappIcon from '../../assets/icons/whatsapp.svg';
import useWindowWidth from '../../hooks/useWindowWidth';

const FooterSignUpForm: React.FC = () => {
  const {
    // buttonDisabled,
    // displaySubmitCard,
    formData,
    formErrors,
    submitButtonClicked,
    handleChange,
    handleSubmit,
    // setDisplaySubmitCard,
  } = useForm(
    'signup-form-submissions',
    signUpValidations,
    {
      phoneNumber: '',
    }
  );

  const windowWidth = useWindowWidth();
  const isScreenBelow900px = windowWidth && windowWidth <= 900;

  const validationError = submitButtonClicked ? formErrors.phoneNumber : undefined;

  const phoneNumberFilled = formData.phoneNumber.length === 10;

  return (
    <form 
      noValidate
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 items-center"
    >
      <div className={`border-2 p-2 ${validationError ? "border-[#ED4337] bg-[#ED4337]/25" : "border-[#010A03] laptop:border-[#CEE0D0] bg-white"} flex gap-2 items-center w-[240px] laptop:w-[412px] rounded-[30px] laptop:rounded-[14px] h-[44px] laptop:h-[60px]`}>
        <img
          src={WhatsappIcon}
          alt="WhatsApp Icon"
          className='laptop:hidden'
        />
        <input
          required
          id="phone"
          type="tel"
          name="phoneNumber"
          maxLength={10}
          value={formData.phoneNumber}
          onChange={handleChange}
          className="block border-none w-full h-full bg-transparent rounded-3xl laptop:rounded-xl focus:outline-none placeholder-[#010A03] text-[#010A03] text-xs laptop:text-base font-sf-pro"
          placeholder="Enter your mobile number"
        />
        <button 
          className={`${phoneNumberFilled ? "flex" : "hidden"} laptop:flex h-full bg-[#1AAE33] max-w-fit items-center w-full px-3 py-4 laptop:px-6 laptop:py-3 rounded-[30px] laptop:rounded-xl text-stone-100 text-[15px] font-semibold`}>
          {isScreenBelow900px ? "Submit" : "Get Mun-e"}
        </button>
      </div>
      {validationError && <p className="text-[#ED4337] font-semibold">{validationError}</p>}
    </form>
  );
};

export default FooterSignUpForm;