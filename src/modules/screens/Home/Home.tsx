import React, { useEffect, useState } from "react";
import * as S from "./Home.styles";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../../routes/Models";
import Profile from "../../../../assets/profile.png";
import Input from "../../../Components/Input/Input";
import CardBook from "../../../Components/CardBook/CardBook";
import CardCategories from "../../../Components/CardCategories/CardCategories";
import Footer from "../../../Components/Footer/Footer";
import { getCategories, getForYou } from "../../../services/books";
import Image from "../../../../assets/teste.png";

interface Icards {
  display_name: string;
  list_name: string;
  list_name_encoded: string;
}

const Home: React.FC = () => {
  const { navigate } = useNavigation<propsStack>();
  const [categories, setCategories] = useState([]);
  const [forYou, setForYou] = useState([]);

  useEffect(() => {
    const getCategoriesService = async () => {
      const { data } = await getCategories();
      setCategories(data.results);
    };

    const getForYouService = async () => {
      const { data } = await getForYou();
      setForYou(data.results.lists);
    };
    getCategoriesService();
    getForYouService();
  }, []);

  return (
    <S.Container>
      <S.ContainerTop>
        <S.TitleTop>Bookshelf</S.TitleTop>
        <S.Profile source={Profile} />
      </S.ContainerTop>
      <Input />
      <S.ContainerScroll>
        <S.ContainerSections>
          <S.TitleSections>Para você</S.TitleSections>
          <S.SectionCards horizontal={true}>
            {/* <CardBook
              title="Steve Jobs: A Biografia"
              author="Sam Maggs"
              image="https:storage.googleapis.com\/du-prd\/books\/images\/9781982164911.jpg"
            /> */}
          </S.SectionCards>
        </S.ContainerSections>
        <S.ContainerSections>
          <S.TitleSections>Generos</S.TitleSections>
          <S.SectionCards horizontal={true}>
            {forYou &&
              forYou.map((card: Icards) => (
                <CardCategories
                  navigate={() =>
                    navigate("List", {
                      params: card.list_name_encoded,
                      title: card.list_name,
                    })
                  }
                  key={card.list_name}
                  title={card.display_name}
                />
              ))}
          </S.SectionCards>
        </S.ContainerSections>

        <S.ContainerSections>
          <S.TitleSections>Categorias</S.TitleSections>
          <S.SectionCards horizontal={true}>
            {categories &&
              categories.map((card: Icards) => (
                <CardCategories
                  key={card.list_name}
                  title={card.display_name}
                />
              ))}
          </S.SectionCards>
        </S.ContainerSections>
        <S.ContainerSections>
          <S.TitleSections>Os mais lidos da semana</S.TitleSections>
          <S.SectionCards horizontal={true}>
            {/* <CardBook />
            <CardBook />
            <CardBook /> */}
          </S.SectionCards>
        </S.ContainerSections>
      </S.ContainerScroll>
      <Footer />
    </S.Container>
  );
};

export default Home;
