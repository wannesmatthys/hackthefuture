import React from "react";

interface IClue {
    id: string, 
    name: string,
    type: string,
}

interface IProps {
    clues: [IClue] | undefined,
}

const Notepad = (props: IProps): JSX.Element => {
    const { clues } = props;

    const cluesSorted: {
        locations: IClue[],
        weapons: IClue[],
        murderers: IClue[]
    } = {
        locations: [],
        weapons: [],
        murderers: [],
    };

    if (clues) {
        cluesSorted.locations = clues.filter((clue) => clue.type === "location");
        cluesSorted.weapons  = clues.filter((clue) => clue.type === "weapon");
        cluesSorted.murderers = clues.filter((clue) => clue.type === "murderer");

        console.log(cluesSorted);
    }

    return (
        <div className="w-full h-full">
            <h1 className="text-3xl mb-5">Notepad</h1>

            <div className="flex justify-between">
                <div className="border-r border-white w-1/3">
                    <h3 className="text-xl font-bold pb-5 pr-5 mb-7">Murderers</h3>

                    <ul className="text-xl leading-10">
                        { cluesSorted.murderers.map(clue => <li key={clue.id}>{clue.name}</li>)}
                    </ul>
                </div>
                <div className="border-r border-white w-1/3 pl-5">
                    <h3 className="text-xl font-bold pb-5 pr-5 mb-7">Weapons</h3>

                    <ul className="text-xl leading-10">
                        {/* <li className="text-gray-500 line-through">Bill Bridge</li> */}
                        { cluesSorted.weapons.map(clue => <li key={clue.id}>{clue.name}</li>)}
                    </ul>
                </div>
                <div className=" w-1/3 pl-5">
                    <h3 className="text-xl font-bold pb-5 pr-5 mb-7">Location</h3>

                    <ul className="text-xl leading-10">
                        { cluesSorted.locations.map(clue => <li key={clue.id}>{clue.name}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Notepad;
