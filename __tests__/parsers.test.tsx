
import 'react-native';
import { asyncStoragePokemonData, retrievePokemonData } from '../src/storage/persistanteStorage';
import { transformCaptalize, transformPokemonTypes, transformFlavorText, trasnformPokemonId, getMeterstoFootPol, trasnformPokemonData } from '../src/utils/parser';
import { pokemonTestData } from '../__testData__/pokemonData';



describe('Testando os parsers', () => {

    it('should apear id like #001', () => {

        expect(trasnformPokemonId('1')).toEqual('#001');
        expect(trasnformPokemonId('9')).toEqual('#009');
        expect(trasnformPokemonId('10')).toEqual('#010');
        expect(trasnformPokemonId('99')).toEqual('#099');
        expect(trasnformPokemonId('100')).toEqual('#100');
        expect(trasnformPokemonId('1000')).toEqual('#1000');
    });

    it('should convert name to capitalize', () => {
        expect(transformCaptalize('bulbasaur')).toEqual('Bulbasaur');
    });


    it('should remove break lines', () => {
        expect(transformFlavorText('Text1 \nText2 \nText3')).toEqual('Text1 Text2 Text3');
    });

    it('should convert to array of strings', () => {
        let types = [
            { type: { name: 'grass' } }, { type: { name: 'poison' } }
        ];
        expect(transformPokemonTypes(types)).toEqual(['grass', 'poison']);
    });

    it('should convert meters to foot pol string', () => {
        expect(getMeterstoFootPol(0.7)).toEqual("2'04''");
    });

    it('should transform pokemon response', () => {
        let data = {
            id: '#001',
            name: 'Bulbasaur',
            type: ['grass', 'poison'],
            artworkUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
        };

        expect(trasnformPokemonData(pokemonTestData)).toEqual(data);

    });


});