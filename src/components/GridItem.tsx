import React from 'react';

interface IProps {
  text: string,
}

const GridItem = (props: IProps): JSX.Element => {
  const { text } = props; 

  return (
    <div className="bg-gray-800 text-white p-6">{text}</div>
  )
}

export default GridItem;