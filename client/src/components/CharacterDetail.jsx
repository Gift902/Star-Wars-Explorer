import React from 'react';
const CharacterDetail = ({ character, films = [], loadingFilms, onClose }) => {
  if (!character) return null;
  const id = character.url.split('/').filter(Boolean).pop();
  const imageUrl = `https://images.weserv.nl/?url=https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#111] border border-white/20 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-black/50 rounded-full hover:bg-star-wars-yellow hover:text-black transition-all"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        <div className="w-full md:w-2/5 h-64 md:h-auto overflow-hidden bg-zinc-900 border-b md:border-b-0 md:border-r border-white/10">
          <img 
            src={imageUrl} 
            alt={character.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
            onError={(e) => {
              if (e.target.src !== 'https://placehold.co/400x600/111/ffe81f?text=No+Image') {
                e.target.src = 'https://placehold.co/400x600/111/ffe81f?text=No+Image';
              }
            }}
          />
        </div>
        <div className="w-full md:w-3/5 p-6 md:p-10 overflow-y-auto">
          <div className="mb-8">
            <span className="text-star-wars-yellow text-xs font-bold uppercase tracking-widest bg-star-wars-yellow/10 px-3 py-1 rounded-full mb-3 inline-block">
              Personnel File
            </span>
            <h2 className="oswald text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-2 leading-none">
              {character.name}
            </h2>
            <div className="w-20 h-1 bg-star-wars-yellow rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Height</p>
              <p className="text-xl font-medium text-gray-200">{character.height} cm</p>
            </div>
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Mass</p>
              <p className="text-xl font-medium text-gray-200">{character.mass} kg</p>
            </div>
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Gender</p>
              <p className="text-xl font-medium text-gray-200 capitalize">{character.gender}</p>
            </div>
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Birth Year</p>
              <p className="text-xl font-medium text-gray-200">{character.birth_year}</p>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6">
            <h4 className="oswald text-xl uppercase tracking-wider mb-4 text-white">Appearances</h4>
            {loadingFilms ? (
              <div className="flex items-center space-x-2 text-gray-500 animate-pulse">
                <div className="w-4 h-4 rounded-full border-2 border-t-transparent border-star-wars-yellow animate-spin"></div>
                <span>Syncing archive records...</span>
              </div>
            ) : (
              <ul className="space-y-2">
                {Array.isArray(films) && films.map((film, idx) => (
                  <li key={idx} className="flex items-center text-gray-300 bg-white/5 px-4 py-2 rounded-lg border border-white/5 hover:border-star-wars-yellow/20 transition-all">
                    <span className="text-star-wars-yellow font-bold mr-3 text-sm">{idx + 1}</span>
                    {film.title}
                  </li>
                ))}
                {(!films || films.length === 0) && !loadingFilms && (
                  <li className="text-gray-500 italic">No historical records found.</li>
                )}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CharacterDetail;
