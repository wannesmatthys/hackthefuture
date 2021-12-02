import React from 'react';
import Button from './base/Button'

const CreateLobby = (): JSX.Element => {
  return (
    <div className="flex justify-center pt-20">
      <div className="text-center">
        <h1 className="text-8xl font-bold pb-4">123456</h1>
        <Button text="Share code" />
      </div>
    </div>
  )
}

export default CreateLobby;