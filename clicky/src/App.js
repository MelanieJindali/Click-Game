import React from 'react';
import PlantList from './components/PlantList';
import Plants from './data/plant.json';
import Header from './components/Header';
import styles from './styles/Main.module.css'


const App = () => {
  return (
    <div className={styles.main} >
      <Header />
      <PlantList list={Plants}/>
    </div>
  );
};

export default App;