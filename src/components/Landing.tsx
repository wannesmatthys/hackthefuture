import { useLobby } from '../hooks/useLobby';
import { ILobby } from '../interfaces';
import Button from './base/Button';
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom';

const Landing = (): JSX.Element => {
  const { createLobby } = useLobby();
  const navigate = useNavigate();

  const handleClick = async () => {
      const lobby: ILobby = await createLobby();
      navigate(`/lobby/${lobby.lobbyCode}`);
  }

  return (
    <div className="flex justify-center pt-20">
      <div className="text-center w-1/3">
        <h1 className="text-2xl font-bold">HTF Game</h1>
        <p className="py-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus architecto veritatis nemo quam, voluptate iste laboriosam eum illum accusantium neque, ex unde esse ratione mollitia! Impedit molestias quis numquam eaque?</p>
        <div className="pt-4">
          <Button text={"New lobby"} classes={"mr-4"} onClick={handleClick}/>
          <Link to="join">
            <Button text={"Join lobby"}/>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Landing;