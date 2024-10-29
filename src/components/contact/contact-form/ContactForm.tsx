import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useState,
} from 'react';
import TextField from './TextField';
import MessageTextArea from './MessageTextArea';
import * as yup from 'yup';
import {
  addSubmission,
  canSubmit,
} from '../../../utils/submissionTracker';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email({
      field: 'email',
      message: 'Email format is invalid',
    })
    .max(254, {
      field: 'email',
      message: 'Email must not exceed 254 characters',
    }),
  name: yup
    .string()
    .min(5, {
      field: 'name',
      message: 'Name must be at least 5 characters',
    })
    .max(100, {
      field: 'name',
      message: 'Name must not exceed 100 characters',
    }),
  message: yup
    .string()
    .min(10, {
      field: 'message',
      message: 'Message must be at least 10 characters',
    })
    .max(250, {
      field: 'message',
      message: 'Message must not exceed 250 characters',
    }),
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
  const [displaySubmitCard, setDisplaySubmitCard] =
    useState<boolean>(false);

  const [waitTime, setWaitTime] = useState<number | null>(
    null
  );

  const formatWaitTime = (ms: number) => {
    const hours = Math.floor(ms / (1000 * 60 * 60));
    const minutes = Math.floor(
      (ms % (1000 * 60 * 60)) / (1000 * 60)
    );
    return `${hours}h ${minutes}m`;
  };

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
    const submissionStatus = canSubmit();

    try {
      await validationSchema.validate(formData, {
        abortEarly: false,
      });

      if (submissionStatus.allowed) {
        addSubmission(Date.now());
        setWaitTime(null);

        setFormData({ email: '', name: '', message: '' });
        setFormErrors({});
        setDisplaySubmitCard(true);

        alert('Form submitted successfully!');
      } else {
        setWaitTime(
          submissionStatus.waitTime as number | null
        );

        alert(
          `You must wait for ${formatWaitTime(waitTime as number)} until next submission.`
        );
      }
    } catch (err) {
      console.log('failure');

      if (err instanceof yup.ValidationError) {
        const errors = err.errors.reduce(
          (acc, error) => {
            console.log(error);
            //@ts-expect-error ...
            acc[error.field] = error.message;
            return acc;
          },
          {} as {
            email?: string;
            name?: string;
            message?: string;
          }
        );

        setFormErrors(errors);
      }
    }
  };

  useEffect(() => {
    const submissionStatus = canSubmit();
    setWaitTime(submissionStatus.waitTime || null);

    if (submissionStatus.waitTime) {
      const interval = setInterval(() => {
        const newStatus = canSubmit();
        setWaitTime(newStatus.waitTime || null);

        if (newStatus.allowed) clearInterval(interval);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, []);

  useEffect(
    () =>
      setButtonDisabled(
        !Object.values(formData).includes('') ? false : true
      ),
    [formData]
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
    </div>
  );
};

export default ContactForm;
