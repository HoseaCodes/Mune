import React from 'react';

const FormSubmitCard: React.FC<{
  exceededSubmissions: boolean;
}> = ({ exceededSubmissions }) => (
  <div className="flex flex-col gap-2 items-center w-full">
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
