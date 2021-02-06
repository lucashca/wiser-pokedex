import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import pokemonService from "../../service/pokemonService";
import { InfoTitleText, TabScreen } from "../../styles/styles";
import { PokemonArtWorkSmall } from "../itens/PokemonArtWork";
import { connect } from 'react-redux';
import { addEvolutionData } from "../../store/reducersEvolutionData";
import { EvolutioRow } from "../itens/EvolutionRow";



function EvolutionsScreen({ pokemonData, mainColor }: any) {

    const [evolution, setEvolution] = useState<any>([]);
    let aux: any = [];
    if (evolution.length == 0) {
        pokemonService.getPokemonSpeciesById(pokemonData.id).then((resEsp: any) => {

            pokemonService.getUrl(resEsp.data.evolution_chain.url).then((res: any) => {
                let actualPokemon = res.data.chain.species;
                let evolveTo = res.data.chain.evolves_to;
                while (evolveTo && evolveTo.length) {
                    let nextPokemon = evolveTo[0].species;
                    aux.push({ from: actualPokemon, to: nextPokemon, level: evolveTo[0].evolution_details[0].min_level });
                    evolveTo = evolveTo[0].evolves_to;
                    actualPokemon = nextPokemon;
                }
                setEvolution(aux);
            });
        });

    }


    let components: any = [];
    evolution.map((val: any, id: number) => {
        components.push(
            <EvolutioRow key={id} evolution={val}></EvolutioRow>
        );
    });


    return (
        <TabScreen>
            <InfoTitleText style={{ color: mainColor }}>Evolution Chart</InfoTitleText>
            <View style={styles.view}>
                {components}

            </View>
        </TabScreen>
    );
};



const mapStateToProps = (state: any, props: any) => {
    console.log('state', state.evolutionData);
    return { pokemonEvolutionData: state.evolutionData.evolutionData };
};





const styles = StyleSheet.create({
    view: {

        flex: 1
    },

});


export default connect(mapStateToProps)(EvolutionsScreen);