import React, { useState } from 'react';
import { Grid } from './grid';
import { create2DArray } from '../utils';

export type MonomeSizes = '128';

interface Props {
  size: MonomeSizes;
}

export const Monome: React.FC<Props> = (props) => {
  const [grid] = useState(create2DArray(8, 16));
  
  return (
    <div>
      <Grid 
        grid={grid}
      />
    </div>
  );
};