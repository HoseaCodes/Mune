import React, {
  ChangeEvent,
  FormEvent,
  useState,
} from 'react';
import TextField from './TextField';
import MessageTextArea from './MessageTextArea';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email format')
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

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
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
    } catch (err) {
      console.log('failure');

      if (err instanceof yup.ValidationError) {
        console.error(err.errors);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-[#1AAE33] px-4 py-8 rounded-[48px] w-full"
    >
      <TextField
        type="name"
        name="name"
        val={formData.name}
        placeholder="Name"
        handleChange={handleChange}
      />
      <TextField
        type="email"
        name="email"
        val={formData.email}
        placeholder="Email"
        handleChange={handleChange}
      />
      <MessageTextArea
        val={formData.message}
        handleChange={handleChange}
      />
      <button
        type="submit"
        className="w-content flex justify-center py-3 px-6 border-2 border-[#CEE0D0] rounded-xl shadow-sm text-base bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-400 text-black font-semibold"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
