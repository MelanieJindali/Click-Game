import React from 'react';
import styles from '../styles/ImageCard.module.css'

const Card = ({ handleClick, id, image, alt }) => {

  return (
    <div onClick={handleClick}>
      <div className={styles.card}>
        <img key={id} src={image} alt={alt} />
      </div>
    </div>
  );
};

export default Card;