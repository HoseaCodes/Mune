import React from 'react';
import useForm from '../../hooks/useForm';
import { signUpValidations } from '../../constants/validationSchemas';

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

  const validationError = submitButtonClicked
    ? formErrors.phoneNumber
    : undefined;

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="hidden md:block"
    >
      <div className="border-2 border-neutral-300 bg-stone-100 flex justify-between items-center w-[412px] rounded-[14px] h-12">
        <input
          required
          id="phone"
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="w-webkit-fill-available appearance-none placeholder:text-sm placeholder:text-black  bg-transparent rounded py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your phone number"
        />
        {validationError && <p>{validationError}</p>}
        <button className="button-three w-[131px] h-[32px] text-[12px] me-2 text-stone-100 font-semibold rounded-xl hover:shadow-green-500/50 shadow-green-500/80 shadow-md">
          Get Mun-e
        </button>
      </div>
    </form>
  );
};

export default FooterSignUpForm;
