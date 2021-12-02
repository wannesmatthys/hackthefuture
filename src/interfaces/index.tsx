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
        }]

    }
}