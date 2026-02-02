import React, { useState, useEffect } from 'react';
import { swapi } from '../services/swapi';
import CharacterDetail from '../components/CharacterDetail';
const CharacterDetailContainer = ({ character, onClose }) => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (character && Array.isArray(character.films)) {
      setLoading(true);
      const fetchFilms = async () => {
        try {
          const filmPromises = character.films.map(url => swapi.getFilmByUrl(url));
          const filmResults = await Promise.all(filmPromises);
          setFilms(filmResults);
        } catch (error) {
          console.error('Error fetching films:', error);
          setFilms([]);
        } finally {
          setLoading(false);
        }
      };
      fetchFilms();
    } else {
      setFilms([]);
    }
  }, [character]);
  if (!character) return null;
  return (
    <CharacterDetail 
      character={character} 
      films={films} 
      loadingFilms={loading} 
      onClose={onClose} 
    />
  );
};
export default CharacterDetailContainer;
