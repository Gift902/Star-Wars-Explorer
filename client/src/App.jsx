import React, { useState } from 'react';
import Layout from './components/Layout';
import CharacterListContainer from './containers/CharacterListContainer';
import CharacterDetailContainer from './containers/CharacterDetailContainer';
const App = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const handleSelectCharacter = (character) => {
    setSelectedCharacter(character);
    document.body.style.overflow = 'hidden';
  };
  const handleCloseDetail = () => {
    setSelectedCharacter(null);
    document.body.style.overflow = 'unset';
  };
  return (
    <Layout>
      <div className="mb-12 text-center">
        <h2 className="oswald text-4xl md:text-6xl font-bold uppercase tracking-tighter text-white mb-2">
          Explore the <span className="star-wars-yellow">Galaxy</span>
        </h2>
        <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto uppercase tracking-widest leading-relaxed">
          The comprehensive digital records of all known personnel throughout the Galactic Republic and beyond.
        </p>
      </div>
      <CharacterListContainer onSelectCharacter={handleSelectCharacter} />

      <CharacterDetailContainer 
        character={selectedCharacter} 
        onClose={handleCloseDetail} 
      />
    </Layout>
  );
};
export default App;
