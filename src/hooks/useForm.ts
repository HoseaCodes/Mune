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
  const [exceededSubmissions, setExceededSubmissions]=  useState<boolean>(false);
  const [waitTime, setWaitTime] = useState<number | null>(
    null
  );
  const [displaySubmitCard, setDisplaySubmitCard] =
    useState<boolean>(false);
  const [submitButtonClicked, setSubmitButtonClicked] =
    useState<boolean>(false);

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

      updateFormErrors(name, value);
    },
    []
  );

  const updateFormErrors = useCallback(
    async (name: string, value: string) => {
      const updatedFormData = {
        ...formData,
        [name]: value,
      };

      try {
        await contactValidations.validate(updatedFormData, {
          abortEarly: false,
        });

        setFormErrors((prevErrors) => ({
          ...prevErrors,
          [name]: undefined,
        }));
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

          setFormErrors((prevErrors) => ({
            ...prevErrors,
            [name]: errors[name],
          }));
        }
      }
    },
    [contactValidations, formData]
  );

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setSubmitButtonClicked(true);
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
        } else {
          setExceededSubmissions(true);
          setDisplaySubmitCard(true);
          setWaitTime(
            submissionStatus.waitTime as number | null
          );
        }
      } catch (err) {
        if (err instanceof yup.ValidationError) {
          const errors = err.inner.reduce(
            (acc: { [key: string]: string }, error) => {
              if (error.path)
                //@ts-expect-error ...
              acc[error.path] = error.message.message ? error.message.message : error.message;
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
    exceededSubmissions,
    formData,
    formErrors,
    submitButtonClicked,
    handleChange,
    handleSubmit,
    setDisplaySubmitCard,
  };
}

export default useForm;
