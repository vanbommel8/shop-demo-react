import React, { useContext } from "react";
import { Container, Grid } from "@mui/material";
import Book from "./Book";
import Filters from "./Filters";
import { AppContext } from "../App";
import actions from "../store/actions";


export default function Books() {
  const [state, dispatch] = useContext(AppContext);

  const { books, filters } = state;
  const { category } = filters;
  const { filteredBooks } = books;

  console.log("BOOKS", books);

  const selectFilter = (filter) => {
    dispatch({
      type: actions.setFilter,
      payload: { category: filter, word: filters.word },
    });
  }



  return (
    <Container fixed sx={{ mt: 4 }}>
      <Filters category={category} selectFilter={selectFilter} />
      <Grid container spacing={2}>
        {filteredBooks.length > 0
          ? filteredBooks?.map((book) => <Book key={book.id} {...book} />)
          : books.books?.map((book) => <Book key={book.id} {...book} />)}
      </Grid>
    </Container>
  );
}