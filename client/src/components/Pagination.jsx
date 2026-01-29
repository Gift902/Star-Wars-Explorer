import React from 'react';
const Pagination = ({ currentPage, hasNext, hasPrev, onPageChange }) => {
  return (
    <div className="flex items-center justify-center space-x-6 mt-12 py-6 border-t border-white/5">
      <button
        onClick={() => hasPrev && onPageChange(currentPage - 1)}
        disabled={!hasPrev}
        className={`flex items-center space-x-2 oswald uppercase tracking-widest text-sm px-6 py-2 rounded border transition-all ${
          hasPrev 
            ? 'border-white/20 text-white hover:bg-white/10 cursor-pointer' 
            : 'border-white/5 text-gray-700 cursor-not-allowed'
        }`}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
        <span>Previous</span>
      </button>
      <div className="flex items-center">
        <span className="text-gray-500 text-xs uppercase tracking-[0.2em] mr-2">Archive Page</span>
        <span className="star-wars-yellow font-bold text-lg">{currentPage}</span>
      </div>
      <button
        onClick={() => hasNext && onPageChange(currentPage + 1)}
        disabled={!hasNext}
        className={`flex items-center space-x-2 oswald uppercase tracking-widest text-sm px-6 py-2 rounded border transition-all ${
          hasNext 
            ? 'border-white/20 text-white hover:bg-white/10 cursor-pointer' 
            : 'border-white/5 text-gray-700 cursor-not-allowed'
        }`}
      >
        <span>Next</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
      </button>
    </div>
  );
};
export default Pagination;
