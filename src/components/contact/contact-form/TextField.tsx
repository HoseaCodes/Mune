import React, { ChangeEvent } from 'react';

const TextField: React.FC<{
  type: string;
  name: string;
  val: string;
  validationError?: string;
  placeholder: string;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}> = ({
  type,
  name,
  val,
  validationError,
  placeholder,
  handleChange,
}) => (
  <div>
    <input
      required
      id={name}
      type={type}
      name={name}
      value={val}
      onChange={handleChange}
      className={`block ${validationError ? 'border-[#E95F43] border-4 bg-[#F5C6C1] text-[#E95F43]' : 'border-[#CEE0D0] bg-white focus:border-slate-400 text-black'} w-full py-2 px-6 laptop:py-3 border rounded-3xl laptop:rounded-xl shadow-sm focus:outline-none text-base placeholder-[#010A0399] font-medium font-sf-pro`}
      placeholder={placeholder}
    />
    {validationError && (
      <p className="text-[#F5C6C1] ml-2 mt-2 font-medium">
        {validationError}
      </p>
    )}
  </div>
);

export default TextField;
