import styled from 'styled-components/native';
import { COLOR_BLACK, COLOR_TEXT_GRAY, COLOR_WHITE } from './colors';
import { FONT_FAMILY_REGULAR, FONT_SIZE_APPLICATION_TITLE, FONT_SIZE_DESCRIPTION, FONT_SIZE_POKEMON_NAME, FONT_SIZE_POKEMON_TYPE, FONT_SIZE_TITLE, FONT_WEIGHT_BOLD_NUM, FONT_WEIGHT_REGULAR_NUM } from './typography';

export const Title = styled.Text`
  color: ${COLOR_BLACK};
  fontFamily: ${FONT_FAMILY_REGULAR};
  fontSize:${FONT_SIZE_APPLICATION_TITLE}px
  fontWeight:${FONT_WEIGHT_BOLD_NUM};
  marginBottom:10px;

`;

export const LevelText = styled.Text`
  color: ${COLOR_BLACK};
  fontFamily: ${FONT_FAMILY_REGULAR};
  fontSize:${FONT_SIZE_POKEMON_TYPE}px
  fontWeight:${FONT_WEIGHT_BOLD_NUM};
  textAlign:center;
`;

export const Description = styled.Text`
  color: ${COLOR_TEXT_GRAY};
  fontFamily: ${FONT_FAMILY_REGULAR};
  fontSize:${FONT_SIZE_DESCRIPTION}px;
  lineHeight:19px;
`;


export const PokemonName = styled.Text`
  color: ${COLOR_WHITE};
  fontFamily: ${FONT_FAMILY_REGULAR};
  fontSize:${FONT_SIZE_POKEMON_NAME}px;
  fontWeight:${FONT_WEIGHT_BOLD_NUM}
`;

export const PokemonTypeText = styled.Text`
  color: ${COLOR_WHITE};
  fontFamily: ${FONT_FAMILY_REGULAR};
  fontSize:${FONT_SIZE_POKEMON_TYPE}px
  fontWeight:${FONT_WEIGHT_BOLD_NUM};
  marginTop:-1px; 
  `;




export const PokemonId = styled.Text`
  color: ${COLOR_BLACK};
  fontFamily: ${FONT_FAMILY_REGULAR};
  fontSize:${FONT_SIZE_POKEMON_TYPE}px
  fontWeight:${FONT_WEIGHT_BOLD_NUM};
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
  color:${COLOR_TEXT_GRAY};
`;


export const ImageBox = styled.View`
  flex: 1;
  alignItems: center;
 
  paddingBottom: 10px;
 
`;

export const ImageBoxNoFlex = styled.View`
  alignItems: center;
  justifyContent: flex-end;
  paddingBottom: 10px;
 
`;


export const InfoTitleText = styled.Text`
fontFamily: ${FONT_FAMILY_REGULAR};
fontSize:16px;
fontWeight:${FONT_WEIGHT_BOLD_NUM};
lineHeight:19px;
`;

export const PokemonDescriptionText = styled.Text`
  fontFamily: ${FONT_FAMILY_REGULAR};  
  color:${COLOR_TEXT_GRAY};
  fontWeight:${FONT_WEIGHT_REGULAR_NUM};
  fontSize:${FONT_SIZE_DESCRIPTION}px;
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

export const RowDataProgress = styled.View`

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
  fontSize: ${FONT_SIZE_POKEMON_TYPE}px;
  fontWeight: ${FONT_WEIGHT_BOLD_NUM};
`;
export const RowDataText = styled.Text`
  fontFamily: SFProDisplay-Regular;
  fontSize: ${FONT_SIZE_DESCRIPTION}px;
  fontWeight: ${FONT_WEIGHT_REGULAR_NUM};
  color: ${COLOR_TEXT_GRAY};
`;


export const TabScreen = styled.View`
  flex: 1;
  backgroundColor: ${COLOR_WHITE};
  borderTopLeftRadius: 30px;
  borderTopRightRadius: 30px;
  padding: 40px;
  paddingTop: 30px;

`;
