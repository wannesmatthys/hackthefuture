import React from 'react';
import Button from './base/Button'
import Input from './base/Input'

const JoinLobby = (): JSX.Element => {
  return (
    <div className="flex justify-center pt-20">
      <div className="text-center">
        <Input placeholder="Game code" classes="rounded-r-none box-content" />
        <Button text="Join game" classes="rounded-l-none" />
      </div>
    </div>
  )
}

export default JoinLobby;