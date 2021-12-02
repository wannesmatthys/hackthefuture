import React from 'react';
import { useLobby } from '../hooks/useLobby';
import Button from './base/Button'

const Landing = (): JSX.Element => {
  const { createLobby } = useLobby();

  const handleClick = async () => {
      const lobby = await createLobby();
      console.log(lobby);
  }

  return (
    <div className="flex justify-center pt-20">
      <div className="text-center w-1/3">
        <h1 className="text-2xl font-bold">HTF Game</h1>
        <p className="py-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus architecto veritatis nemo quam, voluptate iste laboriosam eum illum accusantium neque, ex unde esse ratione mollitia! Impedit molestias quis numquam eaque?</p>
        <div className="pt-4">
          <Button text={"New lobby"} classes={"mr-4"} onClick={handleClick}/>
          <Button text={"Join lobby"}/>
        </div>
      </div>
    </div>
  )
}

export default Landing;