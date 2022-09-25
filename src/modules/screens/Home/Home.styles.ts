import styled from "styled-components/native";
import normalize from "react-native-normalize";

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
  justify-content: space-between;
  padding-left: ${normalize(8)}px;
  padding-top: ${normalize(24)}px;
`;

export const ContainerScroll = styled.ScrollView`
  width: 100%;
`;

export const TitleTop = styled.Text`
  align-items: center;

  font-family: ${({ theme }) => theme.fonts.lato_black};
  font-size: 22px;
`;

export const Profile = styled.Image``;

export const ContainerSections = styled.View`
  width: 100%;
  display: flex;
  margin-top: ${normalize(24)}px;
`;
export const TitleSections = styled.Text`
  font-family: ${({ theme }) => theme.fonts.lato_black};
  font-size: 18px;
`;

export const SectionCards = styled.ScrollView`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: ${normalize(16)}px;
`;

export const ContainerCategories = styled.View`
  width: 100%;
  display: flex;
  margin-top: ${normalize(24)}px;
`;
export const TitleCategories = styled.Text`
  font-family: ${({ theme }) => theme.fonts.lato_black};
  font-size: 18px;
`;

export const SectionCardsCategories = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: ${normalize(16)}px;
`;
