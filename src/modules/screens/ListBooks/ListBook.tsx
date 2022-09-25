import React, { useEffect, useState } from "react";
import * as S from "./ListBook.styles";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../../routes/Models";
import { getOneGenre } from "../../../services/books";
import CardBook from "../../../Components/CardBook/CardBook";

interface IBooks {
  route: {
    params: {
      params: string;
      title: string;
    };
  };
}

interface IItem {
  title: string;
  book_image: string;
  author: string;
  book_image_width: number;
  book_image_height: number;
}

const ListBooks: React.FC<IBooks> = ({ route }) => {
  const { navigate } = useNavigation<propsStack>();
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getOneGenreService = async () => {
      const { data } = await getOneGenre(route.params.params);
      setBook(data.results.books);
    };

    getOneGenreService();
  }, []);

  return (
    <S.Container>
      <S.ContainerTop>
        <AntDesign
          onPress={() => navigate("Home")}
          name="arrowleft"
          size={24}
          color="black"
        />
        <S.TitleTop>{route.params.title}</S.TitleTop>
      </S.ContainerTop>
      <S.ContainerScroll>
        {book &&
          book.map((item: IItem) => (
            <S.Containerteste>
              <CardBook
                key={item.title}
                width={item.book_image_width}
                height={item.book_image_height}
                title={item.title}
                image={item.book_image}
                author={item.author}
              />
            </S.Containerteste>
          ))}
      </S.ContainerScroll>
    </S.Container>
  );
};

export default ListBooks;
