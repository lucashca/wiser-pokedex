import styled from 'styled-components/native';

export const Title = styled.Text`
  color: #000;
  fontFamily: 'SFProDisplay-Regular';
  fontSize:32px;
  fontWeight:700;
  marginBottom:10px;

`;

export const LevelText = styled.Text`
  color: #000;
  fontFamily: 'SFProDisplay-Regular';
  fontSize:12px;
  fontWeight:700;
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


export const InfoTitleText = styled.Text`
fontFamily: 'SFProDisplay-Regular';
fontSize:16px;
fontWeight:700;
lineHeight:19px;
`;

export const PokemonDescriptionText = styled.Text`
  fontFamily: 'SFProDisplay-Regular';  
  color:#747476;
  fontWeight:400;
  fontSize:15.5px;
  textAlign:justify;
  marginBottom:10px;
`;


export const Table = styled.View`
  flexDirection: column;
  marginTop: 20px;
  alignItems: center;
  
`;

export const Row = styled.View`
  flexDirection: row;
  marginTop: 8px;
`;



export const RowData = styled.View`
  flex: 1;
  padding:2px;
  flexDirection: row;
`;

export const RowDataDouble = styled.View`
  flex: 2;
  padding:2px;
  flexDirection: row;
`;



export const RowDataTitle = styled.Text`
  fontFamily: SFProDisplay-Regular;
  fontSize: 12px;
  fontWeight: 500;
`;
export const RowDataText = styled.Text`
  fontFamily: SFProDisplay-Regular;
  fontSize: 16px;
  fontWeight: 400;
  color: #747476;
`;


export const TabScreen = styled.View`
  flex: 1;
  backgroundColor: #fff;
  borderTopLeftRadius: 30px;
  borderTopRightRadius: 30px;
  padding: 40px;
  paddingTop: 30px;

`;
