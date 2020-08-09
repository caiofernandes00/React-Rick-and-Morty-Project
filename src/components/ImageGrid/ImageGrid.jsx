import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { LogError } from '../styles/styledComponents';
import BoxCharacterContent from '../BoxCharacterContent';
import './styles.scss';

const ImageGrid = ({ images, error, action, children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(action());
  }, [dispatch]);

  return (
    <div className="grid-container">
      {error && <LogError className="error">{JSON.stringify(error)}</LogError>}
      <section className="grid">
        {images.map((image) => (
          <BoxCharacterContent
            left_info_1={image.name}
            left_info_2={image.status}
            left_info_3={image.species}
            left_info_4={image.gender}
            left_info_5={image.type}
            imageSource={image.image}
            right_info_1={image.origin.name}
            right_info_2={image.location.name}
            url={image.url}
          />
        ))}
      </section>
    </div>
  );
};

export default ImageGrid;
