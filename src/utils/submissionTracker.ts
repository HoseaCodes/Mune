const SUBMISSION_KEY = 'contact-form-submissions';
const MAX_SUBMISSIONS = 3;
const TIME_WINDOW = 100000;

export const getSubmissions = (submissionKey: string): number[] => {
  const submissions = localStorage.getItem(submissionKey);
  return submissions ? JSON.parse(submissions) : [];
};

export const addSubmission = (submissionKey: string, timestamp: number): void => {
  const submissions = getSubmissions(submissionKey);
  submissions.push(timestamp);
  localStorage.setItem(
    SUBMISSION_KEY,
    JSON.stringify(submissions)
  );
};

export const clearOldSubmissions = (submissionKey: string): void => {
  const submissions = getSubmissions(submissionKey).filter(
    (timestamp) => Date.now() - timestamp < TIME_WINDOW
  );
  localStorage.setItem(
    SUBMISSION_KEY,
    JSON.stringify(submissions)
  );
};

export const canSubmit = (submissionKey: string): {
  allowed: boolean;
  waitTime?: number;
} => {
  clearOldSubmissions(submissionKey);
  const submissions = getSubmissions(submissionKey);

  if (submissions.length < MAX_SUBMISSIONS) {
    return { allowed: true };
  }

  const oldestSubmission = submissions[0];
  const waitTime =
    TIME_WINDOW - (Date.now() - oldestSubmission);
  return { allowed: false, waitTime };
};
