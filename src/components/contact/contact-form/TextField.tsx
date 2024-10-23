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
      className="block w-full py-2 px-6 laptop:py-3 bg-white border border-gray-300 rounded-3xl laptop:rounded-xl shadow-sm focus:outline-none focus:ring-slate-400 focus:border-slate-400 text-black text-base placeholder-[#010A0399] font-semibold font-sf-pro"
      placeholder={placeholder}
    />
    {validationError && <p>{validationError}</p>}
  </div>
);

export default TextField;
