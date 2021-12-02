import React from 'react';
import { useState } from 'react';
import Button from './base/Button'
import Input from './base/Input'
import { useLobby } from '../hooks/useLobby';
import { useNavigate } from "react-router-dom";

const JoinLobby = (): JSX.Element => {
  const { joinLobby } = useLobby();
  const navigate = useNavigate();

  const [lobbyId, setLobbyId ] = useState("");

  const onJoin = async () => {
    const userName: string = localStorage.getItem("username") || "";
    const body = {playerId: userName}
    const lobby = await joinLobby(lobbyId, body);

    if (lobby) navigate("/create");
  }

  return (
    <div className="flex justify-center pt-20">
      <div className="text-center">
        <Input placeholder="Game code" classes="rounded-r-none" value={lobbyId} onChange={(e) => setLobbyId(e.target.value)} />
        <Button text="Join game" classes="rounded-l-none" onClick={onJoin} />
      </div>
    </div>
  )
}

export default JoinLobby;