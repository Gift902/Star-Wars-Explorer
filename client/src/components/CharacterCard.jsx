import React from 'react';
const CharacterCard = ({ character, onClick }) => {
  if (!character?.url) return null;
  const id = character.url.split('/').filter(Boolean).pop();
  if (!id) return null;
  const imageUrl = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
  return (
    <div
      onClick={() => onClick(character)}
      className="group bg-[#151515] border border-white/10 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:border-star-wars-yellow/50 hover:shadow-[0_0_20px_rgba(255,232,31,0.15)] flex flex-col"
    >
      <div className="aspect-3/4 overflow-hidden bg-zinc-900 relative">
        <img
          src={imageUrl}
          alt={character.name || 'Unknown'}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
           onError={(e) => {
              if (e.target.src !== 'https://starwars-visualguide.com/assets/img/bigplaceholder.jpg') {
                e.target.src = 'https://starwars-visualguide.com/assets/img/bigplaceholder.jpg';
              }
          }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
          <span className="text-star-wars-yellow text-xs font-bold uppercase tracking-widest">
            View Archives
          </span>
        </div>
      </div>
      <div className="p-4 border-t border-white/5 bg-linear-to-b from-[#1a1a1a] to-[#151515]">
        <h3 className="oswald text-lg font-bold uppercase tracking-tight group-hover:star-wars-yellow transition-colors truncate">
          {character.name || 'Unknown'}
        </h3>
        <p className="text-gray-500 text-xs mt-1 uppercase tracking-wider">
          Born: <span className="text-gray-300">{character.birth_year || 'Unknown'}</span>
        </p>
      </div>
    </div>
  );
};
export default CharacterCard;
