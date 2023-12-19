// Button ini untuk Pie ges
import React from 'react';

const Bar = ({ value, color }) => (
  <div className='flex flex-col items-center '>
    <div className={`w-[55px] border rounded-full px-1 text-black bg-${color} self-end md:mr-2 flex justify-center font-bold outline  outline-2`}>
      {value}
    </div>
  </div>
);

export default Bar;
