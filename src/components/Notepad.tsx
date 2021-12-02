import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useGame } from "../hooks/useGame";
import { IGuessResult } from "../interfaces";

interface IClue {
    id: string, 
    name: string,
    type: string,
    selected: boolean 
}

interface IProps {
    clues: [IClue] | undefined,
    triggerResult: boolean
}

interface SortedClues {
    locations: IClue[],
    weapons: IClue[],
    murderers: IClue[]
}

const Notepad = (props: IProps): JSX.Element => {
    const { clues, triggerResult } = props;

    const [sortedClues, setSortedClues] = useState<SortedClues>();
    const { guessGame } = useGame();
    const navigate = useNavigate();
    
    const { lobbyCode } = useParams();

    useEffect(() => {
        let cluesSorted: any = {};

        if (clues) {
            cluesSorted.locations = clues?.filter((clue) => clue.type === "location").map((clue) => ({...clue, selected: true}));
            cluesSorted.weapons  = clues?.filter((clue) => clue.type === "weapon").map((clue) => ({...clue, selected: true}));
            cluesSorted.murderers = clues?.filter((clue) => clue.type === "murderer").map((clue) => ({...clue, selected: true}));
            setSortedClues(cluesSorted);
        }
        
    }, [clues]);

    useEffect(() => {
        if (triggerResult) {
            const result = {
                weapon: sortedClues?.weapons.find(clue => clue.selected === false)?.name ?? '',
                location: sortedClues?.locations.find(clue => clue.selected === false)?.name ?? '',
                murderer: sortedClues?.murderers.find(clue => clue.selected === false)?.name ?? '',
            };
            guessGame(lobbyCode ?? '', result).then((result: IGuessResult) => {
                localStorage.setItem("result", JSON.stringify(result));
                navigate("/endscreen");
            });
        }
    }, [triggerResult]);

    return (
        <div className="w-full h-full">
            <h1 className="text-3xl mb-5">Notepad</h1>

            <div className="flex justify-between">
                <div className="border-r border-white w-1/3">
                    <h3 className="text-xl font-bold pb-5 pr-5 mb-7">Murderers</h3>

                    <ul className="text-xl leading-10">
                        { sortedClues?.murderers.map(clue => <li key={clue.id} onClick={() => {
                            clue.selected = !clue.selected;
                        }} className={clue.selected === false ? "text-gray-500 line-through" : ""}>{clue.name}</li>)}
                    </ul>
                </div>
                <div className="border-r border-white w-1/3 pl-5">
                    <h3 className="text-xl font-bold pb-5 pr-5 mb-7">Weapons</h3>

                    <ul className="text-xl leading-10">
                    { sortedClues?.weapons.map(clue => <li key={clue.id} onClick={() => {
                            clue.selected = !clue.selected;
                        }} className={clue.selected === false ? "text-gray-500 line-through" : ""}>{clue.name}</li>)}
                    </ul>
                </div>
                <div className=" w-1/3 pl-5">
                    <h3 className="text-xl font-bold pb-5 pr-5 mb-7">Location</h3>

                    <ul className="text-xl leading-10">
                    { sortedClues?.locations.map(clue => <li key={clue.id} onClick={() => {
                            clue.selected = !clue.selected;
                        }} className={clue.selected === false ? "text-gray-500 line-through" : ""}>{clue.name}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Notepad;
