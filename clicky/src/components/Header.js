import React from 'react';
import styles from '../styles/Header.module.css'

const Header = ({ score, highscore, gameMessage }) => {

  return (
    <div className={styles.header}>
      <h1>Clicky Game</h1>
      <p>Try not to click the same image TWICE!</p>
      <h3>Score: {score} High Score: {highscore}</h3>
      <h4>{gameMessage}</h4>
    </div>
  );
};

export default Header;