export function trasnformPokemonId(id: any) {
    if (id < 10) {
        id = "#00" + id;
    } else {
        if (id < 100) {
            id = '#0' + id;
        } else {
            id = '#' + id;
        }
    }
    return id;
}

export function transformPokemonTypes(types: any) {
    let type = [];
    for (let t of types) {
        type.push(t.type.name);
    }
    return type;
}

export function transformCaptalize(name: string) {
    return name[0].toUpperCase() + name.slice(1);
}

export function transformFlavorText(text: string) {
    return text.replace(/(\r\n|\n|\r)/gm, "");
}

export function getMeterstoFootPol(metros: number) {
    let pe = Math.floor(metros / 0.3048);
    let pol = ((metros % 0.3048) / 0.0254);
    if (pol < 10) {
        return pe + "'0" + pol.toFixed(0) + "''";
    } else {
        return pe + "'" + pol.toFixed(0) + "''";
    }
};


export function trasnformPokemonData(data: any) {

    let id = trasnformPokemonId(data.id);
    let type = transformPokemonTypes(data.types);
    let name = transformCaptalize(data.name);
    let pokemonData = {
        id,
        type,
        name,
        artworkUrl: data.sprites.other['official-artwork'].front_default
    };

    return pokemonData;

}