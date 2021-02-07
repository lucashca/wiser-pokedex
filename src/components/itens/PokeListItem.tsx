import React, { PureComponent } from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import { POKEMON_ITEM_HEIGHT } from "../../../global";
import { DotsSvg, PokeballBgTypeSvg } from "../../assets/images";
import { storeActionsAddPokemonData } from "../../redux/actions/actionRedux";
import { sagaAddPokemonDataById } from "../../redux/actions/actionsSaga";

import pokemonService from "../../service/pokemonService";
import { retrievePokemonData } from "../../storage/persistanteStorage";
import { getTypeInfoAndColorsByPokemonType } from "../../styles/colors";
import { Loading } from "../../styles/styles";
import { MyStore } from "../../utils/iterfaces";

import { transformPokemonTypes, trasnformPokemonId, transformCaptalize } from "../../utils/parser";
import { PokemonArtWork } from "../unit/PokemonArtWork";
import { PokemonPersonalData } from "../unit/PokemonPersonalData";


export interface State {
    id: string;
    name: string;
    type: string[];
    artworkUrl: string;
}



export interface Props {
    name: string;
    url: string;
    pokemonData: any;
    dispatch: any;
}


class PokeListItem extends PureComponent<Props, State> {



    mounted: boolean = false;
    constructor(props: Props, state: State) {
        super(props);
        this.state = state;
    }

    componentDidMount() {
        this.mounted = true;
        if (!this.props.pokemonData) {
            this.getPokemonDataInCache();
            //
        }
    }

    getPokemonDataInCache = () => {
        retrievePokemonData(this.props.name).then((res) => {
            if (res) {
                try {
                    let pokemonData = JSON.parse(res);
                    if (this.mounted) {
                        this.props.dispatch(storeActionsAddPokemonData(pokemonData));
                    }
                } catch (error) {
                    this.props.dispatch(sagaAddPokemonDataById(this.props.name));
                }
            } else {
                this.props.dispatch(sagaAddPokemonDataById(this.props.name));
            }
        });
    };

    getPokemonInWeb = () => {
        pokemonService.getUrl(this.props.url).then((res: any) => {
            let id = trasnformPokemonId(res.data.id);
            let type = transformPokemonTypes(res.data.types);
            let name = transformCaptalize(this.props.name);
            let pokemonData = {
                id,
                type,
                name,
                artworkUrl:
                    res.data.sprites.other['official-artwork'].front_default
            };


            if (this.mounted)
                this.setState({ ...pokemonData });
        });

    };

    componentDidUpdate = () => {
        if (!this.props.pokemonData) {
            this.getPokemonDataInCache();
        }
    };

    componentWillUnmount = () => {
        this.mounted = false;
    };

    render() {
        let bgColor = getTypeInfoAndColorsByPokemonType('').backgroundColor;
        if (this.props.pokemonData) {
            bgColor = getTypeInfoAndColorsByPokemonType(this.props.pokemonData.type[0]).backgroundColor;
            return (
                <View style={styles.mainContainer}>
                    <View style={[styles.item, { backgroundColor: bgColor }]}>
                        <DotsSvg style={styles.dots} />
                        <PokeballBgTypeSvg style={styles.pokeball} />
                        <PokemonPersonalData id={this.props.pokemonData.id} types={this.props.pokemonData.type} name={this.props.pokemonData.name} />
                        <PokemonArtWork artworkUrl={this.props.pokemonData.artworkUrl} />
                    </View>
                </View>
            );
        } else {

            return (
                <View style={styles.mainContainer}>
                    <View style={[styles.item, { backgroundColor: bgColor }]}>
                        <DotsSvg style={styles.dots} />
                        <PokeballBgTypeSvg style={styles.pokeball} />
                        <Loading size='large' color='#6F6E78' />
                    </View>
                </View>
            );
        }
    }

}

const mapTopProps = (state: MyStore, props: any) => {

    return { pokemonData: state.pokemonsData[props.name] };
};




export default connect(mapTopProps)(PokeListItem);

const styles = StyleSheet.create({
    dots: {
        position: "absolute",
        left: 90,
        top: 5,
    },
    pokeball: {
        position: 'absolute',
        right: 0,
    },
    mainContainer: {
        height: POKEMON_ITEM_HEIGHT,
        paddingTop: 20,
    },

    item: {
        flexDirection: 'row',
        height: 115,
        borderRadius: 10,
    }

});