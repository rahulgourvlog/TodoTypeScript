import React from 'react';

const Spinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-fit">
      <div className="w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;