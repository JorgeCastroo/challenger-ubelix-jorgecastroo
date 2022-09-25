import normalize from "react-native-normalize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.background};
  padding: ${normalize(16)}px;
  padding-bottom: 0px;
`;

export const ContainerTop = styled.View`
  display: flex;
  flex-direction: row;
  padding-left: ${normalize(8)}px;
  padding-top: ${normalize(24)}px;
`;

export const Containerteste = styled.View``;

export const ContainerScroll = styled.ScrollView`
  width: 100%;
`;

export const TitleTop = styled.Text`
  padding-left: ${normalize(21)}px;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.lato_black};
  font-size: 22px;
`;
