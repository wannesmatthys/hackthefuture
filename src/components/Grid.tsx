import React from 'react';
import GridItem from './GridItem'

const Grid = (): JSX.Element => {
  return (
    <div>
      <h1 className="text-4xl text-center pb-4">00:54</h1>

      <div className="grid gap-4 grid-cols-3">
      <GridItem text={"Bjebs"}/>
      <GridItem text={"Bjebs"}/>
      <GridItem text={"Bjebs"}/>
      <GridItem text={"Bjebs"}/>
      <GridItem text={"Bjebs"}/>
      <GridItem text={"Bjebs"}/>
      <GridItem text={"Bjebs"}/>
      <GridItem text={"Bjebs"}/>
      <GridItem text={"Bjebs"}/>
    </div>
    </div>
  )
}

export default Grid;