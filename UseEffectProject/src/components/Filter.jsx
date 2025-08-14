
// Filter.jsx
import React from 'react';

function Filter({ filterData, category, setCategory }) {
  return (
    <div className='flex justify-center items-center flex-wrap gap-4 p-4'>
      {filterData.map((data) => (
        <button
          key={data.id}
          onClick={() => setCategory(data.title)}
          className={`px-4 py-2 rounded-lg font-semibold text-white 
            ${category === data.title ? 'bg-yellow-500' : 'bg-gray-700'}
          `}
        >
          {data.title}
        </button>
      ))}
    </div>
  );
}

export default Filter;





