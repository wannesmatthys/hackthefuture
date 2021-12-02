import React from 'react';
import Notepad from './Notepad';

const Game = (): JSX.Element => {
  return (
    <div className="flex">
      <div className="w-1/2 p-6">test</div>
      <div className="w-1/2 bg-gray-800 text-white p-6">
        <Notepad />
      </div>
    </div>
  )
}

export default Game;