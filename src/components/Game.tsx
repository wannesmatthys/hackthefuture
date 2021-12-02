import React from 'react';
import Grid from './Grid';
import Guess from './Guess';
import Notepad from './Notepad';

const Game = (): JSX.Element => {
  return (
    <div className="flex h-screen items-center">
      <div className="w-1/2 p-6">
        {/* <Grid /> */}
        <Guess />
      </div>
      <div className="w-1/2 bg-gray-800 text-white p-6">
        <Notepad />
      </div>
    </div>
  )
}

export default Game;