import React from 'react';
import styles from '../styles/ImageCard.module.css'

const Plant = (props) => {
  console.log(props);
  return (
    <div>
      <img className={styles.card} src={props.image} alt={props.alt}/>
    </div>
  );
};

export default Plant;