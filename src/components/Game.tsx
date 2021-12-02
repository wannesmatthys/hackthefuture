import React from 'react';
import Grid from './Grid';
import Guess from './Guess';

const Game = (): JSX.Element => {
  return (
    <div className="flex h-screen items-center">
      <div className="w-1/2 p-6">
        {/* <Grid /> */}
        <Guess />
      </div>
      <div className="w-1/2 bg-gray-800 text-white p-6 h-screen">
        <h1 className="text-3xl">Notepad</h1>
      </div>
    </div>
  )
}

export default Game;