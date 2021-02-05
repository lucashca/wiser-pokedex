import mainServer from "./mainServer";

class PokemonService {


    constructor() {

    }

    async getUrl(url: string) {
        try {
            mainServer.setBaseURL('');

            return mainServer.get(url);
        } catch (error) {
            console.log(error);
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
            console.log(error);
        }
    }

    async getPokemonByName(name: number) {
        try {
            return mainServer.get('/pokemon', { name });
        } catch (error) {
        }
    }

    async getPokemonWhereNameLike(name: number) {
        try {
            return mainServer.get('/pokemon', { name });
        } catch (error) {
        }
    }


}


export default new PokemonService();