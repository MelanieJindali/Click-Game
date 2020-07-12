import React from 'react';

const Plant = (props) => {
  console.log(props);
  return (
    <div>
      <img src={props.image} alt={props.alt}/>
    </div>
  );
};

export default Plant;