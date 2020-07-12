import React from 'react';
import Plant from  './Plant';

const PlantList = (props) => {
  console.log(props);
  const PlantImg = props.list.map(plant => {
    return <Plant image={plant.image} alt={plant.alt}/>
  })
  return (
    <div>
      {PlantImg}
    </div>
  );
};

export default PlantList;