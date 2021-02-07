import { useState, useCallback, useEffect } from "react";
import { LIMIT_QUERY } from "../../global";
import pokemonService from "../service/pokemonService";
import { PokemonItemList } from "../utils/iterfaces";



export function useFindNewPokemons(): [PokemonItemList[], any] {
    const [page, setPage] = useState(1);

    const [shouldFetch, setShouldFetch] = useState(true);

    const [pokemons, setPokemons] = useState<PokemonItemList[]>([]);

    const fetchMore = useCallback(() => setShouldFetch(true), []);

    useEffect(
        () => {
            if (!shouldFetch) {
                return;
            }

            const fetch = async () => {
                let newPokeMons: any = await pokemonService.getPokemons(LIMIT_QUERY, (page - 1) * LIMIT_QUERY);
                newPokeMons = newPokeMons.data.results;
                setShouldFetch(false);
                setPokemons((oldPokemons: any) => [...oldPokemons, ...newPokeMons]);
                setPage(page + 1);
            };
            fetch();
        },
        [page, shouldFetch],
    );

    return [pokemons, fetchMore];
}