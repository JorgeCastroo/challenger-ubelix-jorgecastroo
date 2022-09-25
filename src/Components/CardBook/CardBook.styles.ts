import normalize from "react-native-normalize";
import styled from "styled-components/native";

interface IProps {
  width: number;
  height: number;
}

export const Container = styled.View<IProps>`
  width: 100%;
  align-items: center;
  margin-right: ${normalize(12)}px;
`;

export const Image = styled.Image<IProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.lato_bold};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray_one};
`;

export const Author = styled.Text`
  font-family: ${({ theme }) => theme.fonts.lato_regular};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray_two};
`;

export const ContainerStar = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
