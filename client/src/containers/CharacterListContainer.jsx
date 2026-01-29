import React, { useState, useEffect, useCallback } from 'react';
import { swapi } from '../services/swapi';
import CharacterCard from '../components/CharacterCard';
import SearchFilter from '../components/SearchFilter';
import Pagination from '../components/Pagination';
const CharacterListContainer = ({ onSelectCharacter }) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [response, setResponse] = useState(null);
  const fetchCharacters = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await swapi.getCharacters(page, search);
      const results = data.results || (Array.isArray(data) ? data : []);
      setCharacters(results);
      setResponse(data);
    } catch (err) {
      setError('Could not establish connection to the Jedi Temple archives.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [page, search]);
  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchCharacters();
    }, 400); 
    return () => clearTimeout(timeout);
  }, [fetchCharacters]);
  const handleSearchChange = (val) => {
    setSearch(val);
    setPage(1); 
  };
  return (
    <div>
      <SearchFilter value={search} onChange={handleSearchChange} />
      {loading && characters.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="w-12 h-12 border-4 border-t-star-wars-yellow border-white/10 rounded-full animate-spin mb-4"></div>
          <p className="oswald uppercase tracking-widest text-gray-500">Accessing Archives...</p>
        </div>
      ) : error ? (
        <div className="text-center py-20 text-red-500 bg-red-500/10 rounded-lg border border-red-500/20">
          <p className="oswald text-xl uppercase tracking-wider">{error}</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {Array.isArray(characters) && characters.map((char) => (
              <CharacterCard 
                key={char.url} 
                character={char} 
                onClick={onSelectCharacter} 
              />
            ))}
          </div>
          {!loading && characters.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              <p className="oswald text-xl uppercase tracking-wider">No characters found in the archives.</p>
            </div>
          )}
          {response && characters.length > 0 && response.count !== undefined && (
            <Pagination 
              currentPage={page}
              hasNext={!!response.next}
              hasPrev={!!response.previous}
              onPageChange={setPage}
            />
          )}
        </>
      )}
    </div>
  );
};
export default CharacterListContainer;
