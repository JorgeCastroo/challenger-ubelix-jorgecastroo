import styled from "styled-components/native";
import normalize from "react-native-normalize";

export const Container = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${normalize(28)}px;
  height: 56px;
  border: 1px solid #f2f2f2;
  border-radius: 4px;
  padding: ${normalize(16)}px;
  ::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
    font-size: 14px;
    font-weight: ${({ theme }) => theme.fonts.lato_bold};
  }
`;

export const Input = styled.TextInput``;
