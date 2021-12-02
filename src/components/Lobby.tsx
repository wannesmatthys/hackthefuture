import React, { useEffect, useState } from 'react';
import { Params, useNavigate, useParams } from 'react-router';
import { useLobby } from '../hooks/useLobby';
import { useGame } from '../hooks/useGame';
import { ILobby } from '../interfaces';
import Button from './base/Button'
import PlayerList from './PlayerList';

const Lobby = (): JSX.Element => {
  const { lobbyCode } = useParams();
  const { getLobby } = useLobby();
  const { startGame } = useGame();
  const [lobby, setLobby] = useState<ILobby>();

  const navigate = useNavigate();

  useEffect(() => {
    getLobby(lobbyCode ?? '').then(setLobby);
  }, [lobbyCode]);

  const onStartGame = async () => {
    await startGame(lobbyCode ?? '');
    navigate(`/game/${lobbyCode}`);
  }
  
  return (
    <div className="flex justify-center pt-20">
      <div className="text-center">
        <h1 className="text-8xl font-bold pb-4">{ lobby?.lobbyCode }</h1>

        <div>
          <h2 className="text-xl mb-1 font-bold">Players</h2>
          { lobby?.players ? <PlayerList players={lobby.players} /> : null}
        </div>
        <Button text="Share code" classes=""/>
        <Button text="Start game" classes="mt-6" onClick={onStartGame} />
      </div>
    </div>
  )
}

export default Lobby;