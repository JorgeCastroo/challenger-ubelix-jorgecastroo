import React from "react";
import * as S from "./CardBook.styles";
import { Entypo } from "@expo/vector-icons";

interface Props {
  title: string;
  image: string;
  author: string;
  width?: number;
  height?: number;
}

const Book: React.FC<Props> = (props: Props) => {
  return (
    <S.Container>
      <S.Image
        width={props.width}
        height={props.height}
        source={{
          uri: props.image,
        }}
      />
      <S.Title>{props.title}</S.Title>
      <S.Author>{props.author}</S.Author>
      <S.ContainerStar>
        <Entypo name="star" size={13} color="#673403" />
        <Entypo name="star" size={13} color="#673403" />
        <Entypo name="star" size={13} color="#673403" />
        <Entypo name="star" size={13} color="#673403" />
        <Entypo name="star" size={13} color="#673403" />
      </S.ContainerStar>
    </S.Container>
  );
};

export default Book;
