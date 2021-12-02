import { useFetch } from "use-http";
import { ILobby } from "../interfaces";

export const useLobby = () => {
    const { post, response, loading, error } = useFetch('https://htf-api.hyperdrive.studio');

    async function createLobby(): Promise<ILobby> {
        return await post('/lobby');
    }
    
    return {
        createLobby
    }
}
