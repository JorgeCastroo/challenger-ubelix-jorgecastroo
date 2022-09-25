import normalize from "react-native-normalize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  max-width: 74px;
  margin-right: ${normalize(12)}px;
`;

export const Icon = styled.View`
  width: 100%;
  height: 74px;
  background-color: #f2994a;
  border-radius: 4px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.lato_bold};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray_one};
`;
