import { api } from "../api";

const key = "?api-key=vi0bsV0yOCA9qYnmAaOUJV4dO0BNhUGR";
export const getCategories = async () => {
  try {
    const { data } = await api.get(`/svc/books/v3/lists/names.json${key}`);
    return Promise.resolve({ data });
  } catch (err) {
    console.error(err);
    return Promise.reject(err);
  }
};

export const getForYou = async () => {
  try {
    const { data } = await api.get(`/svc/books/v3/lists/overview.json${key}`);
    return Promise.resolve({ data });
  } catch (err) {
    console.error(err);
    return Promise.reject(err);
  }
};

export const getOneGenre = async (kindOfBooks: string) => {
  try {
    const { data } = await api.get(
      `/svc/books/v3/lists/current/${kindOfBooks}${key}`
    );
    return Promise.resolve({ data });
  } catch (err) {
    console.error(err);
    return Promise.reject(err);
  }
};
