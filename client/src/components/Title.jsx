import React from 'react';

const Title = ({ title1, title2, align = 'center' }) => {
  return (
    <div
      className={`flex items-center gap-3 mb-4 ${
        align === 'center' ? 'justify-center' : 'justify-start'
      }`}
    >
      <h2 className="text-lg sm:text-xl md:text-2xl font-light tracking-wide uppercase text-gray-500">
        {title1}{' '}
        <span className="text-gray-800 font-semibold">{title2}</span>
      </h2>
      <span className="w-10 sm:w-14 h-[2px] bg-gray-800 rounded-full"></span>
    </div>
  );
};

export default Title;
