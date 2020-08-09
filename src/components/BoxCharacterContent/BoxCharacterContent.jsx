import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const BoxCharacterContent = ({
  imageSource,
  left_info_1,
  left_info_2,
  left_info_3,
  left_info_4,
  left_info_5,
  right_info_1,
  right_info_2,
  right_info_3,
  right_info_4,
  url,
}) => {
  return (
    <div className="box">
      <img className="box__image" alt={left_info_1} src={imageSource} />
      <div className="description">
        <div className="description__left">
          <p>
            <Link className="name" to={`/characters/?q=${left_info_1}`}>
              {left_info_1}
            </Link>
          </p>
          <p>
            {left_info_2} - {left_info_3}
          </p>
          <p>{left_info_4}</p>
          <p>{left_info_5}</p>
        </div>
        <div className="description__right">
          <p>
            <Link to={`/locations/?q=${right_info_1}`}>
              Origin: {right_info_1}
            </Link>
          </p>
          <p>
            <Link to={`/locations/?q=${right_info_2}`}>
              Location: {right_info_2}
            </Link>
          </p>
        </div>
        <div className="more-info">
          <a className="more-info" href={url}>
            More Info
          </a>
        </div>
      </div>
    </div>
  );
};

export default BoxCharacterContent;
