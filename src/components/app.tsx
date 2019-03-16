import React from 'react';
import { Monome } from './monome';

export const App = () => {
  return (
    <div className="sans-serif pa4">
      <h2 className="fw2 mt0 black">Monome Levels</h2>
      <Monome size="128" />
    </div>
  );
};