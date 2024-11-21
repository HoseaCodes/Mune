const MAX_SUBMISSIONS = 3;
const TIME_WINDOW = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

export const getSubmissions = (
  localStorageKey: string
): number[] => {
  const submissions = localStorage.getItem(localStorageKey);
  return submissions ? JSON.parse(submissions) : [];
};

export const addSubmission = (
  localStorageKey: string,
  timestamp: number
): void => {
  const submissions = getSubmissions(localStorageKey);
  submissions.push(timestamp);
  localStorage.setItem(
    localStorageKey,
    JSON.stringify(submissions)
  );
};

export const clearOldSubmissions = (
  localStorageKey: string
): void => {
  const submissions = getSubmissions(
    localStorageKey
  ).filter(
    (timestamp) => Date.now() - timestamp < TIME_WINDOW
  );
  localStorage.setItem(
    localStorageKey,
    JSON.stringify(submissions)
  );
};

export const canSubmit = (
  localStorageKey: string
): {
  allowed: boolean;
  waitTime?: number;
} => {
  clearOldSubmissions(localStorageKey);
  const submissions = getSubmissions(localStorageKey);

  if (submissions.length < MAX_SUBMISSIONS) {
    return { allowed: true };
  }

  const oldestSubmission = submissions[0];
  const waitTime =
    TIME_WINDOW - (Date.now() - oldestSubmission);
  return { allowed: false, waitTime };
};
