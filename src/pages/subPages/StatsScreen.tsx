import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { InfoTitleText, Table, Row, RowData, RowDataTitle, RowDataText, TabScreen, RowDataProgress } from "../../styles/styles";
import { StaticProgressBar } from "../../components/unit/StaticProgressBar";

interface Stats {
    total: number;
    hp: number;
    attack: number;
    defense: number;
    specialAtk: number;
    specialDef: number;
    speed: number;
    hpProgress: number;
    attackProgress: number;
    defenseProgress: number;
    specialAtkProgress: number;
    specialDefProgress: number;
    speedProgress: number;

}


export function StatsScreen({ pokemonData, mainColor }: any) {
    let stats: Stats = {} as Stats;

    const transFormStats = (s: Stats) => {

        // Equação aritrária para identifiar o tamanho da barra status.
        // Seria necessário uma explicação de como é calculádo o tamanho da barra.
        const sum = s.hp + s.attack + s.defense + s.specialAtk + s.specialDef + s.speed;
        const media = sum / 4;
        s.hpProgress = s.hp / media;
        s.attackProgress = s.attack / media;
        s.defenseProgress = s.defense / media;
        s.specialAtkProgress = s.specialAtk / media;
        s.specialDefProgress = s.specialDef / media;
        s.speedProgress = s.speed / media;
        s.total = sum;

        return s;
    };

    for (let s of pokemonData.stats) {
        switch (s.stat.name) {
            case 'hp':
                stats.hp = s.base_stat;
                break;
            case 'attack':
                stats.attack = s.base_stat;
                break;
            case 'defense':
                stats.defense = s.base_stat;
                break;
            case 'special-attack':
                stats.specialAtk = s.base_stat;
                break;
            case 'special-defense':
                stats.specialDef = s.base_stat;
                break;
            case 'speed':
                stats.speed = s.base_stat;
                break;
        }
    }

    stats = transFormStats(stats);

    return (
        <TabScreen>
            <InfoTitleText style={{ color: mainColor }}>Base Stats</InfoTitleText>
            <Table>
                <Row >
                    <RowData><RowDataTitle >HP</RowDataTitle></RowData>
                    <RowData><RowDataText >{stats.hp}</RowDataText></RowData>
                    <RowDataProgress style={styles.progress}>
                        <StaticProgressBar color={mainColor} progress={stats.hpProgress} height={5} />
                    </RowDataProgress>
                </Row>
                <Row >
                    <RowData><RowDataTitle >Attack</RowDataTitle></RowData>
                    <RowData><RowDataText >{stats.attack}</RowDataText></RowData>
                    <RowDataProgress style={styles.progress}>
                        <StaticProgressBar color={mainColor} progress={stats.attackProgress} height={5} />
                    </RowDataProgress>
                </Row>
                <Row >
                    <RowData><RowDataTitle >Defense</RowDataTitle></RowData>
                    <RowData><RowDataText >{stats.defense}</RowDataText></RowData>
                    <RowDataProgress style={styles.progress}>
                        <StaticProgressBar color={mainColor} progress={stats.defenseProgress} height={5} />
                    </RowDataProgress>
                </Row>
                <Row >
                    <RowData><RowDataTitle >Sp.Atk</RowDataTitle></RowData>
                    <RowData><RowDataText >{stats.specialAtk}</RowDataText></RowData>
                    <RowDataProgress style={styles.progress}>
                        <StaticProgressBar color={mainColor} progress={stats.specialAtkProgress} height={5} />
                    </RowDataProgress>
                </Row>
                <Row >
                    <RowData><RowDataTitle >Sp.Def</RowDataTitle></RowData>
                    <RowData><RowDataText >{stats.specialDef}</RowDataText></RowData>
                    <RowDataProgress style={styles.progress}>
                        <StaticProgressBar color={mainColor} progress={stats.specialDefProgress} height={5} />
                    </RowDataProgress>
                </Row>
                <Row >
                    <RowData><RowDataTitle >Speed</RowDataTitle></RowData>
                    <RowData><RowDataText >{stats.speed}</RowDataText></RowData>
                    <RowDataProgress style={styles.progress}>
                        <StaticProgressBar color={mainColor} progress={stats.speedProgress} height={5} />
                    </RowDataProgress>
                </Row>
                <Row >
                    <RowData><RowDataTitle >Total</RowDataTitle></RowData>
                    <RowData><RowDataText >{stats.total}</RowDataText></RowData>
                    <RowDataProgress style={styles.progress}></RowDataProgress>
                </Row>
            </Table>
        </TabScreen>
    );
}


const styles = StyleSheet.create({
    progress: {
        flex: 3,
        justifyContent: 'flex-start',
        alignItems: 'center',

    },

});
