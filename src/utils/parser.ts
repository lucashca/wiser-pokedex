

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

export function trasnformPokemonName(name: string) {
    return name[0].toUpperCase() + name.slice(1);
}

