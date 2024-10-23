import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useState,
} from 'react';
import TextField from './TextField';
import MessageTextArea from './MessageTextArea';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Email format is invalid')
    .min(5, 'Email must be at least 5 characters')
    .max(254, 'Email must not exceed 254 characters')
    .required('Email is required'),
  name: yup
    .string()
    .min(5, 'Name must be at least 5 characters')
    .max(100, 'Name must not exceed 100 characters')
    .required('Name is required'),
  message: yup
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(250, 'Message must not exceed 250 characters')
    .required('Message is required'),
});

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<{
    email: string;
    name: string;
    message: string;
  }>({
    email: '',
    name: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState<{
    email?: string;
    name?: string;
    message?: string;
  }>({});
  const [buttonDisabled, setButtonDisabled] =
    useState<boolean>(true);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined,
    }));
  };

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      await validationSchema.validate(formData, {
        abortEarly: false,
      });

      console.log('success');
      setFormData({ email: '', name: '', message: '' });
      setFormErrors({});
    } catch (err) {
      console.log('failure');

      if (err instanceof yup.ValidationError) {
        console.error(err.errors);
      }
    }
  };

  useEffect(
    () =>
      setButtonDisabled(
        !Object.values(formData).includes('') ? false : true
      ),
    [formData]
  );

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="space-y-6 bg-[#1AAE33] px-4 py-8 rounded-[48px] w-full"
    >
      <TextField
        type="name"
        name="name"
        val={formData.name}
        validationError={formErrors.name}
        placeholder="Name"
        handleChange={handleChange}
      />
      <TextField
        type="email"
        name="email"
        val={formData.email}
        validationError={formErrors.email}
        placeholder="Email"
        handleChange={handleChange}
      />
      <MessageTextArea
        val={formData.message}
        validationError={formErrors.message}
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
  );
};

export default ContactForm;
