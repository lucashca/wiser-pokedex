# Desafio técnico Pokédex Wiser

## Objetivo 
  
Desenvolver uma aplicação em React Native utilizando o modelo de layout do [link](https://www.figma.com/file/THLxZSlOoUYMZrjFg0Kl1M/Pok%C3%A9dex?node-id=268%3A320) 
e consumir a API [PokeAPI](https://pokeapi.co/).

## Características 

*  Listar todos os pokemons
*  Acessar as seguintes informações de um pokemon:
    *   HP 
    *   Ataque 
    *   Defesa 
    *   Velocidade 
    *   Habilidades(abilities 

## Get Started

### Instalar todas as depências 
  
    yarn install 
  
ou 

    npm install
  
  
### Executar o projeto no android
  
    yarn run android

ou

    npm run android

### Executar o react native

    yarn start
  
ou 

    npm start
  

### Telas desenvolvidas 


##### Home Page
| Pokémon List                                                                     | Pokémon List                                                                     | Pokémon Search On List                                                           | Search Pokémon                                                                   |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| ![1](https://github.com/lucashca/wiser-pokedex/blob/main/prints/1.jpeg?raw=true) | ![2](https://github.com/lucashca/wiser-pokedex/blob/main/prints/2.jpeg?raw=true) | ![6](https://github.com/lucashca/wiser-pokedex/blob/main/prints/6.jpeg?raw=true) | ![7](https://github.com/lucashca/wiser-pokedex/blob/main/prints/7.jpeg?raw=true) |


##### Pokémon Info Page
| About Tab                                                                        | Status Tab                                                                       | Evolution Tab                                                                    |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| ![3](https://github.com/lucashca/wiser-pokedex/blob/main/prints/3.jpeg?raw=true) | ![4](https://github.com/lucashca/wiser-pokedex/blob/main/prints/4.jpeg?raw=true) | ![5](https://github.com/lucashca/wiser-pokedex/blob/main/prints/5.jpeg?raw=true) |



### Decisões de Projeto

### Redux-Saga

  Foi utilizado o redux saga para gerenciar o armazenamento do estado da aplicação.Este foi útil para garantir o que os dados dos pokémons vindo de multiplas requisições assincronas fossem salvos no estado da aplicação.

### Async Storage

  Foi utilizado o Async Storage para armazenar os dados dos Pokémons já requisitados, servindo como um cache de informações que serão apresentadas no aplicativo.
 
### Ciclo de vida do uso do cache
  
  Cada item da lista de pokémons é responsável por requisitar as informações completas do pokémom isto com base em valores passados pelo componente pai.
  
  Antes de executar a requisição, verifica se o dado já existe no cache do **Async Storage**.
  
   *   Se existir, exibe.
    
   *   Se não existir, despacha uma ação para o **Redux**, onde seu middleware (**Saga**) irá realizar uma requisição assíncrona do dado e salvar no estado da aplicação quando for recebido o valor, também salva o resultado no **Async Storage** para necessidades futuras. 