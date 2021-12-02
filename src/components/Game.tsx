import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useGame } from '../hooks/useGame';
import { IGame } from '../interfaces';
import Grid from './Grid';
import Guess from './Guess';
import Notepad from './Notepad';

const Game = (): JSX.Element => {
  const { lobbyCode } = useParams();
  const { getGame } = useGame();

  const [game, setGame] = useState<IGame>();

  useEffect(() => {
      getGame(lobbyCode ?? '').then((game: IGame) => {
          setGame(game);
          console.log(game);
      });
  }, [lobbyCode]);

  return (
    <div className="flex h-screen items-center">
      <div className="w-1/2 p-6">
        <Grid />
        {/* <Guess /> */}
      </div>
      <div className="w-1/2 bg-gray-800 text-white p-6 h-screen">
        <Notepad clues={game?.data.clues} />
      </div>
    </div>
  )
}

export default Game;