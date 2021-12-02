import { useEffect, useState } from 'react';
import Input from './base/Input'
import { useLobby } from '../hooks/useLobby';
import { ILobby } from '../interfaces';
import Button from './base/Button';
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom';

const Landing = (): JSX.Element => {
  const { createLobby, joinLobby } = useLobby();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [name, setName] = useState("");

  useEffect(() => {
      const username = localStorage.getItem("username");
      if (username) setUsername(username);
  }, []);

  const handleClick = async () => {
      const playerId = localStorage.getItem("username") ?? '';
      const lobby: ILobby = await createLobby();
      console.log(lobby);
      await joinLobby(lobby.lobbyCode, playerId);
      
      navigate(`/lobby/${lobby.lobbyCode}`);
  }

  const onCreateUser = () => {
    setUsername(name);
    localStorage.setItem("username", name);
  }

  return (
    <div className="flex justify-center pt-20">
      <div className="text-center w-1/3">
        <h1 className="text-2xl font-bold">HTF Game</h1>
        <p className="py-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus architecto veritatis nemo quam, voluptate iste laboriosam eum illum accusantium neque, ex unde esse ratione mollitia! Impedit molestias quis numquam eaque?</p>
        <div className="pt-4">
          { !username
            ?
            <div className='pb-4'>
                <form method="" onSubmit={onCreateUser}> 
                  <Input placeholder="Username" classes="rounded-r-none" value={name} onChange={(e) => setName(e.target.value)} />
                  <Button text="Create" classes="rounded-l-none" type="submit" />
                </form>
              </div>
            :
            <div>
              <Button text={"New lobby"} classes={"mr-4"} onClick={handleClick}/>
              <Link to="join">
                <Button text={"Join lobby"}/>
              </Link>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Landing;