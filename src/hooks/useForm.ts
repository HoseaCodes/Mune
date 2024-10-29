import {
  ChangeEvent,
  FormEvent,
  useEffect,
  useState,
} from 'react';
import * as yup from 'yup';
import {
  addSubmission,
  canSubmit,
} from '../utils/submissionTracker';

function useForm(
  localStorageKey: string,
  // @ts-expect-error ...
  contactValidations,
  initInputVals: {
    [field: string]: string;
  }
) {
  const [formData, setFormData] = useState<{
    [field: string]: string;
  }>(initInputVals);
  const [formErrors, setFormErrors] = useState<{
    [field: string]: string | undefined;
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
    const submissionStatus = canSubmit(localStorageKey);

    try {
      await contactValidations.validate(formData, {
        abortEarly: false,
      });

      if (submissionStatus.allowed) {
        addSubmission(localStorageKey, Date.now());
        setWaitTime(null);

        setFormData(initInputVals);
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
        const errors = err.errors.reduce((acc, error) => {
          console.log(error);
          //@ts-expect-error ...
          acc[error.field] = error.message;
          return acc;
        }, {});

        setFormErrors(errors);
      }
    }
  };

  useEffect(() => {
    const submissionStatus = canSubmit(localStorageKey);
    setWaitTime(submissionStatus.waitTime || null);

    if (submissionStatus.waitTime) {
      const interval = setInterval(() => {
        const newStatus = canSubmit(localStorageKey);
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

  return {
    buttonDisabled,
    displaySubmitCard,
    formData,
    formErrors,
    handleChange,
    handleSubmit,
    setDisplaySubmitCard,
  };
}

export default useForm;
