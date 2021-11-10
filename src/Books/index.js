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

  // const selectFilter =(filter) => {
  //   dispatch({
  //     type: "SET_FILTER",
  //     payload: { category: filter, word: filters.word },
  //   });
  // };

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



// import React, { useState } from "react";
// import { Container, Grid } from "@mui/material";
// import booksMock from "../mocks/books";
// import Book from "./Book";
// import Filters from "./Filters";

// export default function Books() {
//   const [books, setBooks] = useState(booksMock);
//   const [selectedFilter, setSelectedFilter] = useState("All");

//   const selectFilter = (filter) => {
//     setSelectedFilter(filter);
//     setBooks(
//       filter === "All"
//         ? booksMock
//         : booksMock.filter((book) => book.category === filter)
//     );
//   };

//   return (
//     <Container fixed sx={{ mt: 4 }}>
//       <Filters selectedFilter={selectedFilter} selectFilter={selectFilter} />
//       <Grid container spacing={2}>
//         {books?.map((book) => (
//           <Book key={book.id} {...book} />
//         ))}
//       </Grid>
//     </Container>
//   );
// }