import React from 'react';
import useForm from '../../hooks/useForm';
import { signUpValidations } from '../../constants/validationSchemas';

const HeroSignUpForm: React.FC = () => {
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

  const validationError = submitButtonClicked ? formErrors.phoneNumber : undefined;

  return (
    <form 
      noValidate
      onSubmit={handleSubmit}
      className="hidden sm:block"
    >
      <div className="border-2 p-2 bg-[#010A0340]/25 border-[#CEE0D0] flex gap-2 items-center w-[412px] rounded-[14px] h-[60px]">
        <input
          required
          id="phone"
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="block border-none w-full h-full bg-transparent border border-gray-300 rounded-3xl laptop:rounded-xl shadow-sm focus:outline-none focus:ring-slate-400 focus:border-slate-400 placeholder-white text-white text-base font-sf-pro"
          placeholder="Enter your mobile number"
        />
        {validationError && <p>{validationError}</p>}
        <button 
          className="h-full max-w-fit flex items-center w-full px-6 py-3 rounded-xl text-stone-100 text-[15px] font-semibold">
          Get Mun-e
        </button>
      </div>
    </form>
  );
};

export default HeroSignUpForm;