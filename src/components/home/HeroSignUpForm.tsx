import React from 'react';
import useForm from '../../hooks/useForm';
import { heroSignUpValidations } from '../../constants/validationSchemas';

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
    'hero-signup-form-submissions',
    heroSignUpValidations,
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
      <div className="border-2 border-[#CEE0D0] flex justify-between items-center w-[412px] rounded-[14px] h-[60px]">
      <div>
    <input
      required
      id="phone"
      type="tel"
      name="phoneNumber"
      value={formData.phoneNumber}
      onChange={handleChange}
      className="block w-full py-2 px-6 laptop:py-3 bg-white border border-gray-300 rounded-3xl laptop:rounded-xl shadow-sm focus:outline-none focus:ring-slate-400 focus:border-slate-400 text-black text-base placeholder-[#010A0399] font-semibold font-sf-pro"
      placeholder="Phone Number"
    />
    {validationError && <p>{validationError}</p>}
  </div>
        <button 
          className="h-11 rounded-xl text-stone-100 me-2 text-[15px] font-semibold px-6">
          Get Mun-e
        </button>
      </div>
    </form>
  );
};

export default HeroSignUpForm;