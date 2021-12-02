import { useFetch } from "use-http";
import { IGame } from "../interfaces";

export const useGame = () => {
    const { post, get, response, loading, error } = useFetch('https://htf-api.hyperdrive.studio');

    const getGame = async (lobbyCode: string): Promise<IGame> => {
        return await get(`/game/${lobbyCode}`);
    }

    const startGame = async (lobbyCode: string): Promise<IGame> => {
        return await post(`/game/${lobbyCode}/start`);
    }
    
    return {
        getGame, startGame
    }
}
