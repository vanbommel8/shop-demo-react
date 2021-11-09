import React, { useContext } from "react";
import { Container, Grid } from "@mui/material";
import Book from "./Book";
import Filters from "./Filters";
import { AppContext } from "../App";


export default function Books() {
  const [state, dispatch] = useContext(AppContext);

  const { books, filters } = state;
  const { category } = filters;
  const { filteredBooks } = books;


  return (
    <Container fixed sx={{ mt: 4 }}>
      <Filters category={category} dispatch={dispatch} />
      <Grid container spacing={2}>
        {filteredBooks.lenght > 0
          ? filteredBooks?.map((book) => <Book key={book.id} {...book} />)
          : books.books?.map((book) => <Book key={book.id} {...book} />)}
      </Grid>
    </Container>
  );
}