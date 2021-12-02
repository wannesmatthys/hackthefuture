import React from 'react';
import Input from './base/Input';
import Button from './base/Button';

const Guess = (): JSX.Element => {
  return (
    <div className="flex justify-center">
      <div className="w-1/2">
        <p className="text-center">Give it a try and do a guess!</p>
        <div className="pt-6">
          <Input placeholder="Murderer" classes="w-full mb-3"/>
          <Input placeholder="Murder weapon" classes="w-full mb-3"/>
          <Input placeholder="Crime scene" classes="w-full mb-3"/>
          <Button text="Send your guess" classes="w-full" />
        </div>
      </div>

    </div>
  )
}

export default Guess;