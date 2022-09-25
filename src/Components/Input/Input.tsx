import React from "react";
import * as S from "./Input.styles";
import { AntDesign } from "@expo/vector-icons";

const Input: React.FC = () => {
  return (
    <S.Container>
      <S.Input placeholder="Qual livro você gostaria de ler hoje?" />
      <AntDesign name="search1" size={17} color="#828282" />
    </S.Container>
  );
};

export default Input;
