import React from 'react';
import { Button } from './button';

interface Props {
  grid: Array<Array<number>>;
}

export const Grid: React.FC<Props> = (props) => {
  function renderRow(row: number[], x: number) {
    return row.map((_, y) => (
      <Button x={x} y={y} key={`${x}-${y}`} />
    ));
  }

  console.log(props.grid);

  return (
    <div>
      {props.grid.map((row, index) => (
        <div className="flex pv2" key={index}>
          {renderRow(row, index)}
        </div>
      ))}
    </div>
  );
};