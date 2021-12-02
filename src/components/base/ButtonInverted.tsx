import React from 'react';

interface IProps {
  text: string,
  classes: string,
}

const ButtonInverted = (props: IProps): JSX.Element => {
  const { text, classes } = props;

  return (
    <button className={`p-2 border-solid border-white border-2 rounded-md transition hover:bg-white hover:text-black ${classes}`}>{ text }</button>
  )
}

export default ButtonInverted;