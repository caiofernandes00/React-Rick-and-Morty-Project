const fetchAllCharacters = async (page) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}`,
  );
  const data = await response.json();

  if (response.status >= 400) throw new Error(data.errors);
  return data;
};

const fetchSingleCharacter = async (name) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?name=${name}`,
  );
  const data = await response.json();

  if (response.status >= 400) throw new Error(data.errors);
  return data;
};

const fetchAllEpisodes = async (page) => {};
const fetchSingleEpisode = async () => {};

const fetchAllLocations = async (page) => {};
const fetchSingleLocation = async () => {};

export {
  fetchAllCharacters,
  fetchSingleCharacter,
  fetchAllEpisodes,
  fetchSingleEpisode,
  fetchAllLocations,
  fetchSingleLocation,
};
