import React from 'react';
import styles from '../styles/Header.module.css'

const Header = (props) => {
  return (
    <div className={styles.header}>
      <h1>Clicky Game: Plant Edition</h1>
      <p>Try not to click the same image TWICE!</p>
      <h3>Score: </h3>
      <h3>Highest Score: </h3>
    </div>
  );
};

export default Header;