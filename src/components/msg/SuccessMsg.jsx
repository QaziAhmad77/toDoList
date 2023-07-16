import React from 'react';
import { ImSpinner9 } from 'react-icons/im';

const SuccessMsg = ({ successMsg }) => {
  return (
    <div className="absolute shadow-todoShadow font-titleFont tracking-wide font-medium text-lg top-2 left-[40%] bg-bodyColor px-10 py-4 rounded-sm border-b-[6px] border-b-green-500 text-green-500">
      <p className="flex items-center gap-4">
        <span className="text-xl animate-spin">
          <ImSpinner9 />
        </span>{' '}
        {successMsg}
      </p>
    </div>
  );
};

export default SuccessMsg;
