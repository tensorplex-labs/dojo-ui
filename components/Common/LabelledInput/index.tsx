import { LabelledInputProps } from '@/types/CommonTypes';
import { FontSpaceMono } from '@/utils/typography';
import React from 'react';

const LabelledInput: React.FC<LabelledInputProps> = ({
  id,
  label,
  type = 'text',
  placeholder = '',
  value,
  onChange,
}) => {
  return (
    <div className="mb-4 flex flex-col">
      <label htmlFor={id} className={`font-bold ${FontSpaceMono.className} text-sm opacity-75`}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border-2 border-black p-2 text-lg shadow-brut-sm"
      />
    </div>
  );
};

export default LabelledInput;
