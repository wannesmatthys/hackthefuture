import { useFetch } from "use-http";
import { IGame } from "../interfaces";

export const useGame = () => {
    const { post, get, response, loading, error } = useFetch('https://htf-api.hyperdrive.studio');

    const getGame = async (gameCode: string): Promise<IGame> => {
        return await get(`/game/${gameCode}`);
    }

    const createGame = async (): Promise<IGame> => {
        return await post('/game');
    }
    
    return {
        getGame, createGame
    }
}
