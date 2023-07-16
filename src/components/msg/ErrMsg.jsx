import React from 'react';
import { ImSpinner9 } from 'react-icons/im';

const ErrMsg = ({errMsg}) => {
  return (
    <div className="absolute shadow-todoShadow font-titleFont tracking-wide font-medium text-lg top-2 left-[40%] bg-bodyColor px-10 py-4 rounded-sm border-b-[6px] border-b-red-500 text-red-500">
      <p className="flex items-center gap-4">
        <span className="text-xl animate-spin">
          <ImSpinner9 />
        </span>{' '}
        {errMsg}
      </p>
    </div>
  );
};

export default ErrMsg;
