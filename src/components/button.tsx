import React from 'react';

interface Props {
  x: number;
  y: number;
}

export const Button: React.FC<Props> = (props) => {
  function onClickHandler() {
    console.log(props);
  }

  return (
    <div 
      className="outline pa3 mr3 br4" 
      onClick={onClickHandler}
    />
  );
};