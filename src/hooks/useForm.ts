import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useMemo,
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

  const formatWaitTime = useCallback((ms: number) => {
    const hours = Math.floor(ms / (1000 * 60 * 60));
    const minutes = Math.floor(
      (ms % (1000 * 60 * 60)) / (1000 * 60)
    );
    return `${hours}h ${minutes}m`;
  }, []);

  const formattedWaitTime = useMemo(
    () => (waitTime ? formatWaitTime(waitTime) : null),
    [waitTime, formatWaitTime]
  );

  const handleChange = useCallback(
    (
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
    },
    []
  );

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
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
            `You must wait for ${formattedWaitTime} until next submission.`
          );
        }
      } catch (err) {
        if (err instanceof yup.ValidationError) {
          const errors = err.inner.reduce(
            (acc: { [key: string]: string }, error) => {
              if (error.path)
                //@ts-expect-error ...
                acc[error.path] = error.message.message;
              return acc;
            },
            {}
          );
          setFormErrors(errors);
        }
      }
    },
    [
      contactValidations,
      formData,
      initInputVals,
      localStorageKey,
      formattedWaitTime,
    ]
  );

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
