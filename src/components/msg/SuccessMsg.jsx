import React from 'react';
import { ImSpinner9 } from 'react-icons/im';

const SuccessMsg = ({ successMsg }) => {
  return (
    <div className="fixed top-0 left-0 right-0 flex items-center justify-center">
      <div className="shadow-todoShadow font-titleFont tracking-wide font-medium text-lg bg-bodyColor px-10 py-4 rounded-sm border-b-[6px] border-b-green-500 text-green-500">
        <p className="flex items-center gap-4">
          <span className="text-xl animate-spin">
            <ImSpinner9 />
          </span>{' '}
          {successMsg}
        </p>
      </div>
    </div>
  );
};

export default SuccessMsg;
