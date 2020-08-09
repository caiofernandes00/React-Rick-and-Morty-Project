import React from 'react';
import { useSelector } from 'react-redux';

import { loadCharacters } from '../store/actions';
import { searchCharacter } from '../store/actions';

import Search from '../components/Search';
import ImageGrid from '../components/ImageGrid';

const CharactersPage = () => {
  const images = useSelector((state) => state.images);
  const error = useSelector((state) => state.error);

  return (
    <div>
      <Search textLabel="Search any character" action={searchCharacter} />
      <ImageGrid
        images={images}
        error={error}
        action={loadCharacters}
      ></ImageGrid>
    </div>
  );
};

export default CharactersPage;
