import styled from 'styled-components/native';

export const Title = styled.Text`
  color: #000;
  fontFamily: 'SFProDisplay-Regular';
  fontSize:32px;
  fontWeight:700;
  marginBottom:10px;

`;

export const Description = styled.Text`
  color: #747476;
  fontFamily: 'SFProDisplay-Regular';
  fontSize:16px;
  lineHeight:19px;
`;


export const PokemonName = styled.Text`
  color: #fff;
  fontFamily: 'SFProDisplay-Regular';
  fontSize:26px;
  fontWeight:700
`;

export const PokemonTypeText = styled.Text`
  color: #fff;
  fontFamily: 'SFProDisplay-Regular';
  fontSize:12px;
  fontWeight:500;
  marginTop:-1px; 
  `;




export const PokemonId = styled.Text`
  color: rgba(23, 23, 27, 0.6);
  fontFamily: 'SFProDisplay-Regular';
  fontSize:12px;
  fontWeight:bold;
  lineHeight:14px;
`;


export const MainContainer = styled.SafeAreaView`
  position:absolute;
  display:flex;
  height:100%;
  flexDirection:column;
  justifyContent:center;
  paddingTop:44px;
  paddingLeft:40px;
  paddingRight:40px;
  
`;



export const SearchBarInput = styled.TextInput`
  flex: 1;
  height:60px;
  padding:10px;

`;

export const Loading = styled.ActivityIndicator`
  flex: 1;
  color:#6F6E78;
`;


export const ImageBox = styled.View`
  flex: 1;
  alignItems: center;
  justifyContent: flex-end;
  paddingBottom: 10px;
 
`;

export const ImageBoxNoFlex = styled.View`
  alignItems: center;
  justifyContent: flex-end;
  paddingBottom: 10px;
 
`;

export const PokemonArtName = styled.Text`
fontFamily: 'SFProDisplay-Regular';
fontSize:100px;
fontWeight:700;
marginBottom:10px;
textAlign:center;
color:#fff;
textShadowColor:#f0f,
textShadowOffset:5px 5px,
`;
