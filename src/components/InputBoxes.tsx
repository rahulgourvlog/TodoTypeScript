import React from 'react';

interface InputBoxProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const InputBox: React.FC<InputBoxProps> = ({ value, onChange, placeholder }) => {
  return (
    <input 
      type="text" 
      value={value} 
      onChange={onChange} 
      className="border rounded px-4 py-2 w-full" 
      placeholder={placeholder} 
    />
  );
};

export default InputBox;