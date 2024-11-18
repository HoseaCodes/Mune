import React from 'react';

const FormSubmitCard: React.FC<{
  forHeroSignup?: boolean;
  exceededSubmissions: boolean;
}> = ({ forHeroSignup, exceededSubmissions }) => (
  <div
    className={`flex flex-col gap-2 ${forHeroSignup ? 'items-center sm:items-start' : 'items-center'} text-center w-full`}
  >
    <p className="text-white font-bold text-xl">
      {exceededSubmissions
        ? 'Oops!'
        : 'Congrats on taking the first steps!'}
    </p>
    <p className="text-white">
      {exceededSubmissions
        ? 'Please check back later to sign up again.'
        : 'You will receive a text shortly.'}
    </p>
  </div>
);

export default FormSubmitCard;
