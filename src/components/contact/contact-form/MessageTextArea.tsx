import React, { ChangeEvent } from 'react';

const MessageTextArea: React.FC<{
  val: string;
  validationError?: string;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}> = ({ val, validationError, handleChange }) => (
  <div>
    <textarea
      id="message"
      name="message"
      value={val}
      onChange={handleChange}
      required
      rows={6}
      className={`block ${validationError ? 'border-[#E95F43] border-4 bg-[#F5C6C1] text-[#E95F43]' : 'border-[#CEE0D0] bg-white focus:border-slate-400 text-black'} w-full py-2 px-6 laptop:py-3 border rounded-3xl laptop:rounded-xl shadow-sm focus:outline-none text-base placeholder-[#010A0399] font-medium font-sf-pro`}
      placeholder="Message"
    />
    {validationError && (
      <p className="text-[#F5C6C1] ml-2 mt-2 font-medium">
        {validationError}
      </p>
    )}{' '}
  </div>
);

export default MessageTextArea;
