import React from 'react';
import styles from '../styles/Main.module.css';

const Wrapper = (props) => {
  return (
    <div className={styles.main}>
      {props.children}
    </div>
  );
};

export default Wrapper;