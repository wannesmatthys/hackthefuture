export interface ILobby {
    games: [],
    players: [],
    lobbyCode: string,
    _id: string
}

export interface IGame {
    state: string,
    round: number,
    activePlayerId: "string", 
    data: {
        clues: [{
            id: string, 
            name: string,
            type: string,
        }],
        grids: IGrid[]
    }
}

export interface IGrid {
    id: string,
    clues: IClue[],
}

export interface IClue {
    id: string,
    text: string
}

export interface IGuessResult {
    murderer: true,
    weapon: true,
    location: true
}

export interface IGuess {
    murderer: string,
    weapon: string,
    location: string
}