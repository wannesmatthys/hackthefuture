import React from 'react';
import ButtonInverted from './ButtonInverted'

interface IProps {
  title: string,
}

const Header = (props: IProps): JSX.Element => {
  const { title } = props;  

  return (
    <div className="text-white bg-gray-800 flex justify-between items-center p-4">
      <div className="text-xl font-bold">{title}</div>
      <div className="flex items-center">
        <div className="pr-4">Menu</div>
        <ButtonInverted text="Stop spel" />
      </div>
    </div>
  )
}

export default Header;