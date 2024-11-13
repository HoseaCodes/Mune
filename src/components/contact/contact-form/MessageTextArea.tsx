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
      className={`block ${validationError ? 'border-[#ED4337] border-4 bg-[#FFC3C3]' : 'border-[#CEE0D0] bg-white focus:border-slate-400'} w-full py-2 px-6 laptop:py-3 border rounded-3xl laptop:rounded-xl shadow-sm focus:outline-none text-black text-base placeholder-[#010A0399] font-semibold font-sf-pro`}
      placeholder="Message"
    />
    {validationError && (
      <p className="text-[#FFC3C3] ml-2">
        {validationError}
      </p>
    )}{' '}
  </div>
);

export default MessageTextArea;
