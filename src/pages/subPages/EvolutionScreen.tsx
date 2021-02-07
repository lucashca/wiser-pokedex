import React from "react";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { EvolutioRow } from "../../components/itens/EvolutionRow";
import pokemonService from "../../service/pokemonService";
import { InfoTitleText, TabScreen } from "../../styles/styles";



function EvolutionsScreen({ pokemonData, mainColor }: any) {

    const [evolution, setEvolution] = useState<any>();
    let aux: any = [];
    if (!evolution) {
        pokemonService.getPokemonSpeciesById(pokemonData.id).then((resEsp: any) => {
            if (resEsp.status == 200) {
                pokemonService.getUrl(resEsp.data.evolution_chain.url).then((res: any) => {
                    let actualPokemon = res.data.chain.species;
                    let evolveTo = res.data.chain.evolves_to;
                    while (evolveTo && evolveTo.length) {
                        let nextPokemon = evolveTo[0].species;
                        let minLevel = evolveTo[0].evolution_details[0].min_level;
                        if (minLevel) {
                            aux.push({ from: actualPokemon, to: nextPokemon, level: evolveTo[0].evolution_details[0].min_level });
                        } else {
                            aux.push({ from: actualPokemon, to: nextPokemon, level: 'not specified' });
                        }
                        evolveTo = evolveTo[0].evolves_to;
                        actualPokemon = nextPokemon;
                    }
                    setEvolution(aux);
                });
            }

        });

    }


    let components: any = [];
    if (evolution && evolution.length > 0) {
        evolution.map((val: any, id: number) => {
            components.push(
                <EvolutioRow key={id} evolution={val}></EvolutioRow>
            );
        });
    } else {
        components.push(
            <InfoTitleText key="NoData">No evolution found!</InfoTitleText>
        );
    }




    return (
        <TabScreen>
            <InfoTitleText style={{ color: mainColor }}>Evolution Chart</InfoTitleText>
            <View style={styles.view}>
                {components}
            </View>
        </TabScreen>
    );
};







const styles = StyleSheet.create({
    view: {

        flex: 1
    },

});


export default EvolutionsScreen;