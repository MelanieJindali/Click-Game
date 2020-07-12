import React from 'react';
import styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>Clicky Game: Plant Edition</h1>
      <p>Try not to click the same image TWICE!</p>
    </div>
  );
};

export default Header;