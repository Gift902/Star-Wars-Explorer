import React from 'react';
const SearchFilter = ({ value, onChange, placeholder = "Search the galaxy..." }) => {
  return (
    <div className="relative group max-w-xl mx-auto mb-10">
      <div className="absolute -inset-1 bg-linear-to-r from-star-wars-yellow/0 via-star-wars-yellow/20 to-star-wars-yellow/0 rounded-lg blur opacity-25 group-focus-within:opacity-100 transition duration-1000"></div>
      <div className="relative flex items-center">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-[#111] border border-white/10 text-white px-5 py-4 pl-12 rounded-lg focus:outline-none focus:border-star-wars-yellow/50 transition-all placeholder:text-gray-600 uppercase tracking-widest text-sm"
        />
        <svg 
          className="absolute left-4 w-5 h-5 text-gray-500 group-focus-within:text-star-wars-yellow transition-colors" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </div>
    </div>
  );
};

export default SearchFilter;
