import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useInterval } from 'usehooks-ts';
import { useGame } from '../hooks/useGame';
import { IGame, IGrid, IGuess, IGuessResult } from '../interfaces';
import Grid from './Grid';
import Guess from './Guess';
import Notepad from './Notepad';

const Game = (): JSX.Element => {
  const { lobbyCode } = useParams();
  const { getGame, guessGame } = useGame();

  const [game, setGame] = useState<IGame>();
  const [gridNumber, setGridNumber] = useState<number>(0);
  const [secondsLeft, setSecondsLeft] = useState(5);
  const [triggerResult, setTriggerResult] = useState<boolean>(false);

  useEffect(() => {
      getGame(lobbyCode ?? '').then((game: IGame) => {
          setGame(game);
      });
  }, [lobbyCode]);

  useInterval(() => {
    setSecondsLeft(secondsLeft - 1);

    if (secondsLeft === 0 && gridNumber === 2) {
      const guess: IGuess = {
        weapon: "",
        location: "",
        murderer: "",
      }
      setTriggerResult(true);
    }
    else if (secondsLeft === 0) {
      setGridNumber(gridNumber + 1);
      setSecondsLeft(5);
    }
  }, 1000);

  return (
    <div className="flex h-screen items-center">
      <div className="w-1/2 p-6">
        <h1 className="text-4xl text-center pb-4">00:{secondsLeft}</h1>
        { game?.data?.grids[gridNumber] ? <Grid grid={game.data.grids[gridNumber]} /> : null}
      </div>
      <div className="w-1/2 bg-gray-800 text-white p-6 h-screen">
        <Notepad clues={game?.data.clues} triggerResult={triggerResult} />
      </div>
    </div>
  )
}

export default Game;