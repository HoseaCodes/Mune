const SUBMISSION_KEY = "contactFormSubmissions";
const MAX_SUBMISSIONS = 3;
const TIME_WINDOW = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

export const getSubmissions = (): number[] => {
  const submissions = localStorage.getItem(SUBMISSION_KEY);
  return submissions ? JSON.parse(submissions) : [];
};

export const addSubmission = (timestamp: number): void => {
  const submissions = getSubmissions();
  submissions.push(timestamp);
  localStorage.setItem(SUBMISSION_KEY, JSON.stringify(submissions));
};

export const clearOldSubmissions = (): void => {
  const submissions = getSubmissions().filter(
    (timestamp) => Date.now() - timestamp < TIME_WINDOW
  );
  localStorage.setItem(SUBMISSION_KEY, JSON.stringify(submissions));
};

export const canSubmit = (): { allowed: boolean; waitTime?: number } => {
  clearOldSubmissions();
  const submissions = getSubmissions();

  if (submissions.length < MAX_SUBMISSIONS) {
    return { allowed: true };
  }

  const oldestSubmission = submissions[0];
  const waitTime = TIME_WINDOW - (Date.now() - oldestSubmission);
  return { allowed: false, waitTime };
};