import React from "react";
import * as S from "./CardCategories.styles";

interface Props {
  title: string;
  navigate?: () => void;
}

const CardCategories: React.FC<Props> = (props: Props) => {
  return (
    <S.Container onPress={props.navigate}>
      <S.Icon />
      <S.Title>{props.title}</S.Title>
    </S.Container>
  );
};

export default CardCategories;
