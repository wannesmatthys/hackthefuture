import React from 'react';
import Grid from './Grid';

const Game = (): JSX.Element => {
  return (
    <div className="flex">
      <div className="w-1/2 p-6">
        <Grid />
      </div>
      <div className="w-1/2 bg-gray-800 text-white p-6">
        <h1 className="text-3xl">Notepad</h1>
      </div>
    </div>
  )
}

export default Game;