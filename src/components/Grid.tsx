import React from 'react';
import { IGrid } from '../interfaces';
import GridItem from './GridItem'

interface IProps {
  grid: IGrid
}

const Grid = (props: IProps): JSX.Element => {
  const { grid } = props;

  return (
    <div>
      <div className="grid gap-4 grid-cols-3">
        { grid.clues.map((item) => <GridItem text={item.text} key={item.id} />)}
    </div>
    </div>
  )
}

export default Grid;