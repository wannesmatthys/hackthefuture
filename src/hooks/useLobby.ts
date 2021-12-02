import { useFetch } from "use-http";
import { ILobby } from "../interfaces";

export const useLobby = () => {
    const { post, get, response, loading, error } = useFetch('https://htf-api.hyperdrive.studio');

    const getLobby = async (lobbyCode: string): Promise<ILobby> => {
        return await get(`/lobby/${lobbyCode}`);
    }

    const createLobby = async (): Promise<ILobby> => {
        return await post('/lobby');
    }
    
    async function joinLobby(id: string, playerId: string): Promise<ILobby> {        
        return await post(`/lobby/${id}/join`, {
            playerId
        });
    }
    
    return {
        createLobby, joinLobby, getLobby
    }
}
