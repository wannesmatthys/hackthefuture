import { useFetch } from "use-http";
import { IGame, IGuess, IGuessResult } from "../interfaces";

export const useGame = () => {
    const { post, get, response, loading, error } = useFetch('https://htf-api.hyperdrive.studio');

    const getGame = async (lobbyCode: string): Promise<IGame> => {
        return await get(`/game/${lobbyCode}`);
    }

    const startGame = async (lobbyCode: string): Promise<IGame> => {
        return await post(`/game/${lobbyCode}/start`);
    }

    const guessGame = async (lobbyCode: string, guess: IGuess): Promise<IGuessResult> => {
        return await post(`/game/${lobbyCode}/guess`, guess); 
    }

    const endGame = async (lobbyCode: string): Promise<IGame> => {
        return await post(`/game/${lobbyCode}/end`, );
    }
     
    return {
        getGame, startGame, endGame, guessGame
    }
}
