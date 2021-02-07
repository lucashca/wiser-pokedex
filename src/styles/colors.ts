import { BugIcon, DarkIcon, DragonIcon, EletricIcon, FairyIcon, FightingIcon, FireIcon, FlyingIcon, GhostIcon, GrassIcon, GroundIcon, IceIcon, NormalIcon, PoisonIcon, PsychicIcon, RockIcon, SteelIcon, WaterIcon } from "../assets/images/types";
import { PokemonTypesEnum } from "../utils/enums";
import { TypeInfoColor } from "../utils/iterfaces";



export function getTypeInfoAndColorsByPokemonType(type: string): TypeInfoColor {
    switch (type) {
        case PokemonTypesEnum.Bug:
            return { backgroundColor: '#8BD674', typeColor: '#8CB330', name: 'Bug', icon: BugIcon };
        case PokemonTypesEnum.Dark:
            return { backgroundColor: '#6F6E78', typeColor: '#58575F', name: 'Dark', icon: DarkIcon };
        case PokemonTypesEnum.Dragon:
            return { backgroundColor: '#7383B9', typeColor: '#0F6AC0', name: 'Dragon', icon: DragonIcon };
        case PokemonTypesEnum.Eletric:
            return { backgroundColor: '#F2CB55', typeColor: '#EED535', name: 'Eletric', icon: EletricIcon };
        case PokemonTypesEnum.Fairy:
            return { backgroundColor: '#EBA8C3', typeColor: '#ED6EC7', name: 'Fairy', icon: FairyIcon };
        case PokemonTypesEnum.Fighting:
            return { backgroundColor: '#EB4971', typeColor: '#D04164', name: 'Fighting', icon: FightingIcon };
        case PokemonTypesEnum.Fire:
            return { backgroundColor: '#FFA756', typeColor: '#FD7D24', name: 'Fire', icon: FireIcon };
        case PokemonTypesEnum.Flying:
            return { backgroundColor: '#83A2E3', typeColor: '#748FC9', name: 'Flying', icon: FlyingIcon };
        case PokemonTypesEnum.Ghost:
            return { backgroundColor: '#8571BE', typeColor: '#556AAE', name: 'Ghost', icon: GhostIcon };
        case PokemonTypesEnum.Grass:
            return { backgroundColor: '#8BBE8A', typeColor: '#62B957', name: 'Grass', icon: GrassIcon };
        case PokemonTypesEnum.Ground:
            return { backgroundColor: '#F78551', typeColor: '#DD7748', name: 'Ground', icon: GroundIcon };
        case PokemonTypesEnum.Ice:
            return { backgroundColor: '#91D8DF', typeColor: '#61CEC0', name: 'Ice', icon: IceIcon };
        case PokemonTypesEnum.Normal:
            return { backgroundColor: '#B5B9C4', typeColor: '#9DA0AA', name: 'Normal', icon: NormalIcon };
        case PokemonTypesEnum.Poison:
            return { backgroundColor: '#9F6E97', typeColor: '#A552CC', name: 'Poison', icon: PoisonIcon };
        case PokemonTypesEnum.Psychic:
            return { backgroundColor: '#FF6568', typeColor: '#EA5D60', name: 'Psychic', icon: PsychicIcon };
        case PokemonTypesEnum.Rock:
            return { backgroundColor: '#D4C294', typeColor: '#BAAB82', name: 'Rock', icon: RockIcon };
        case PokemonTypesEnum.Steel:
            return { backgroundColor: '#4C91B2', typeColor: '#417D9A', name: 'Steel', icon: SteelIcon };
        case PokemonTypesEnum.Water:
            return { backgroundColor: '#58ABF6', typeColor: '#4A90DA', name: 'Water', icon: WaterIcon };
        default:
            return { backgroundColor: '#B5B9C4', typeColor: '#9DA0AA', name: 'Normal', icon: NormalIcon }; // Retorna normal para outros tipos.
    };
}




export const COLOR_TEXT_GRAY = '#747476';
export const COLOR_WHITE = '#fff';
export const COLOR_BLACK = '#17171B';