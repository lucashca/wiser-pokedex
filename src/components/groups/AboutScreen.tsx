import React, { useState } from "react";
import pokemonService from "../../service/pokemonService";
import { TabScreen, PokemonDescriptionText, InfoTitleText, Table, Row, RowData, RowDataText, RowDataTitle, RowDataDouble } from "../../styles/styles";
import { getMeterstoFootPol, transformCaptalize, trasnforFlavorText } from "../../utils/parser";

export function AboutScreen({ pokemonData, mainColor }: any) {
    const [flavorText, setFlavorText] = useState('');
    const [specie, setSpecie] = useState('');


    let abilities: any[] = [];
    let hidden = '';
    pokemonData.abilities.map((val: any, i: any) => {
        if (val.is_hidden) {
            hidden = transformCaptalize(val.ability.name);
        } else {
            let txt = (i + 1) + '. ' + transformCaptalize(val.ability.name);

            abilities.push(<RowDataText key={i}>{txt}</RowDataText>);
        }

    });

    pokemonService.getPokemonSpeciesById(pokemonData.id).then((res: any) => {


        for (let e of res.data.genera) {
            if (e.language.name == 'en') {
                setSpecie(e.genus);
            }
        }
        // Texto apresentado no modelo do figma
        if (Array.isArray(res.data.flavor_text_entries) && res.data.flavor_text_entries.length > 45 && res.data.flavor_text_entries[44].language.name) {
            let text = trasnforFlavorText(res.data.flavor_text_entries[44].flavor_text);
            setFlavorText(text);
        } else {
            if (Array.isArray(res.data.flavor_text_entries)) {
                for (let t of res.data.flavor_text_entries) {
                    if (t.language.name == "en") {
                        let text = trasnforFlavorText(res.data.flavor_text_entries[0].flavor_text);
                        setFlavorText(text);
                        break;
                    }
                }
            }
        }
    });



    return (
        <TabScreen>
            <PokemonDescriptionText>{flavorText}</PokemonDescriptionText>
            <InfoTitleText style={{ color: mainColor }}>Pokédex data</InfoTitleText>
            <Table>
                <Row>
                    <RowData><RowDataTitle>Species</RowDataTitle></RowData>
                    <RowDataDouble><RowDataText>{specie}</RowDataText></RowDataDouble>
                </Row>
                <Row>
                    <RowData><RowDataTitle>Height</RowDataTitle></RowData>
                    <RowDataDouble>
                        <RowDataText>{pokemonData.height / 10}m</RowDataText>
                        <RowDataText style={{ fontSize: 12, paddingTop: 5, paddingLeft: 2 }}>({getMeterstoFootPol(pokemonData.height / 10)})</RowDataText>
                    </RowDataDouble>
                </Row>
                <Row>
                    <RowData><RowDataTitle>Weight</RowDataTitle></RowData>
                    <RowDataDouble>
                        <RowDataText>{pokemonData.weight / 10}kg</RowDataText>
                        <RowDataText style={{ fontSize: 12, paddingTop: 5, paddingLeft: 2 }}>({((pokemonData.weight / 10) * 2.20462).toFixed(1)})lbs</RowDataText>
                    </RowDataDouble>
                </Row>
                <Row>
                    <RowData><RowDataTitle>Abilities</RowDataTitle></RowData>
                    <RowDataDouble style={{ flexDirection: 'column' }}>
                        {abilities}
                        <RowDataText style={{ fontSize: 12 }}>{hidden} (hidden ability)</RowDataText>
                    </RowDataDouble>
                </Row>
            </Table>
        </TabScreen>
    );
}

