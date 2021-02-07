import { GLOBAL_CONFIG } from "../../global";
import mainServer from "./mainServer";

class PokemonService {


    constructor() {

    }

    async getUrl(url: string) {
        try {
            mainServer.setBaseURL('');
            let prom = mainServer.get(url);
            mainServer.setBaseURL(GLOBAL_CONFIG.serverUrl);
            return prom;
        } catch (error) {
            mainServer.setBaseURL(GLOBAL_CONFIG.serverUrl);
        }
    }

    async getPokemonSpeciesById(id: number) {
        try {
            return mainServer.get('/pokemon-species/' + id);
        } catch (error) {
        }
    }


    async getPokemonEvolutionById(id: number) {
        try {
            return mainServer.get('/evolution-chain/' + id);
        } catch (error) {
        }
    }


    async getPokemonById(id: number) {
        try {
            return mainServer.get('/pokemon', { id });
        } catch (error) {
        }
    }

    async getPokemons(limit: number, offset: number) {
        try {
            return mainServer.get('/pokemon?limit=' + limit + '&offset=' + offset);
        } catch (error) {
        }
    }

    async getPokemonByName(name: number) {
        try {
            return mainServer.get('/pokemon/' + name,);
        } catch (error) {
        }
    }



    getBackUrlByNext(next: string, limit: number) {
        /*
        let offset = 0;
        try {
            offset = parseInt(next.split('offset=')[1].split('&')[0]);
        } catch (error) {

        }
        if (offset) {
            let backOffset = offset - limit;
            if (backOffset >= 0) {
                return mainServer.getBaseURL() + '/pokemon?&offset=' + backOffset + 'limit=' + limit;
            }
        }
        return mainServer.getBaseURL() + '/pokemon?&offset=' + 0 + 'limit=' + limit;
        */
        return '';

    }

}


export default new PokemonService();