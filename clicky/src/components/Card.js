import React from 'react';
import styles from '../styles/ImageCard.module.css'

const Card = ({ handleClick, id, image, alt }) => {

  return (
    <div className={styles.container} onClick={() => handleClick(id)}>
      <img className={styles.card} key={id} src={image} alt={alt}/>
    </div>
  );
};

export default Card;