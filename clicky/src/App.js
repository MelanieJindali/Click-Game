import React from 'react';
import PlantList from './components/PlantList';
import Plants from './data/plant.json';

const App = () => {
  return (
    <div>
      <PlantList list={Plants}/>
    </div>
  );
};

export default App;