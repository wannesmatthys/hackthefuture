import React from 'react';
import ButtonInverted from './ButtonInverted'
import {Link} from 'react-router-dom';

interface IProps {
  title: string,
}

const Header = (props: IProps): JSX.Element => {
  const { title } = props;  

  return (
    <div className="text-white bg-gray-800 flex justify-between items-center p-4 shadow-md">
      <Link to="/">
        <h1 className="text-xl font-bold cursor-pointer">{title}</h1>
      </Link>
      <div className="flex items-center">
        <div className="pr-4">Spelregels</div>
        <ButtonInverted text="Stop spel" />
      </div>
    </div>
  )
}

export default Header;