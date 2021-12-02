import React, { useEffect, useState } from 'react';
import { Params, useParams } from 'react-router';
import { useLobby } from '../hooks/useLobby';
import { ILobby } from '../interfaces';
import Button from './base/Button'
import { useInterval } from 'usehooks-ts';
import PlayerList from './PlayerList';

const Lobby = (): JSX.Element => {
  const { lobbyCode } = useParams();
  const { getLobby } = useLobby();
  const [lobby, setLobby] = useState<ILobby>();

  useEffect(() => {
    getLobby(lobbyCode ?? '').then(setLobby);
  });

  useInterval(() => {
      getLobby(lobbyCode ?? '').then(setLobby);
  }, 2000);
  
  return (
    <div className="flex justify-center pt-20">
      <div className="text-center">
        <h1 className="text-8xl font-bold pb-4">{ lobby?.lobbyCode }</h1>

        <div>
          <h2 className="text-xl mb-1 font-bold">Players</h2>
          { lobby?.players ? <PlayerList players={lobby.players} /> : null}
        </div>
        <Button text="Share code" />
      </div>
    </div>
  )
}

export default Lobby;