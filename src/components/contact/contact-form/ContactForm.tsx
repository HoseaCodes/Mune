import React from 'react';
import TextField from './TextField';
import MessageTextArea from './MessageTextArea';
import useForm from '../../../hooks/useForm';
import { contactValidations } from '../../../constants/validationSchemas';

const ContactForm: React.FC = () => {
  const {
    buttonDisabled,
    displaySubmitCard,
    formData,
    formErrors,
    submitButtonClicked,
    handleChange,
    handleSubmit,
    setDisplaySubmitCard,
  } = useForm(
    'contact-form-submissions',
    contactValidations,
    {
      email: '',
      name: '',
      message: '',
    }
  );

  return (
    <div className="relative">
      {displaySubmitCard && (
        <div className="absolute z-10 bg-[#1AAE33] h-full w-full px-4 py-8 rounded-[48px]">
          <p className="text-white">
            Thanks for Contact Us
          </p>
          <button
            className="text-white underline"
            onClick={() => setDisplaySubmitCard(false)}
          >
            Contact Us
          </button>
        </div>
      )}
      <form
        noValidate
        onSubmit={handleSubmit}
        className="space-y-6 bg-[#1AAE33] px-4 py-8 rounded-[48px] w-full"
      >
        <TextField
          type="name"
          name="name"
          val={formData.name}
          validationError={
            submitButtonClicked
              ? formErrors.name
              : undefined
          }
          placeholder="Name"
          handleChange={handleChange}
        />
        <TextField
          type="email"
          name="email"
          val={formData.email}
          validationError={
            submitButtonClicked
              ? formErrors.email
              : undefined
          }
          placeholder="Email"
          handleChange={handleChange}
        />
        <MessageTextArea
          val={formData.message}
          validationError={
            submitButtonClicked
              ? formErrors.message
              : undefined
          }
          handleChange={handleChange}
        />
        <button
          disabled={buttonDisabled}
          type="submit"
          className={`${buttonDisabled && 'opacity-50'} w-content flex justify-center py-3 px-6 border-2 border-[#CEE0D0] rounded-xl shadow-sm text-base bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-400 text-black font-semibold`}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
