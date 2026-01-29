const BASE_URL = 'https://swapi.dev/api';
export const swapi = {
  getCharacters: async (page = 1, search = '') => {
    const url = search 
      ? `${BASE_URL}/people/?search=${encodeURIComponent(search)}&page=${page}`
      : `${BASE_URL}/people/?page=${page}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch characters');
    return response.json();
  },
  getCharacterById: async (id) => {
    const response = await fetch(`${BASE_URL}/people/${id}/`);
    if (!response.ok) throw new Error('Failed to fetch character details');
    return response.json();
  },
  getFilmByUrl: async (url) => {
    const secureUrl = url.replace('http:', 'https:');
    const response = await fetch(secureUrl);
    if (!response.ok) throw new Error('Failed to fetch film');
    return response.json();
  }
};
