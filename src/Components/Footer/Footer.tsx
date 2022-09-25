import React from "react";
import * as S from "./Footer.styles";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Footer: React.FC = () => {
  return (
    <S.Container>
      <Feather name="home" size={24} color="#673403" />
      <Feather name="book-open" size={24} color="#673403" />
      <FontAwesome name="heart-o" size={24} color="#673403" />
      <MaterialCommunityIcons
        name="microphone-outline"
        size={28}
        color="#673403"
      />
    </S.Container>
  );
};

export default Footer;
