import React from 'react';
import styles from '../styles/ImageCard.module.css'

const Card = (props) => {
  console.log(props);
  return (
    <div className={styles.card} onClick={() => props.handleClick(props.id)}>
      <img key={props.id} src={props.image} alt={props.alt} clicked={props.clicked}/>
    </div>
  );
};

export default Card;