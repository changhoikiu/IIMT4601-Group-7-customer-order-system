import * as React from "react";
import BookFilterChips from "../mui_components/BookFilterChips";
import Box from "@mui/joy/Box";
import BookCard from "../mui_components/BookCard";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import BookSortChips from "../mui_components/BookSort";
import Typography from '@mui/joy/Typography';
import { State } from "../context/Context";


export default function Books() {

  const { 
    state: { bookList },
  } = State();

  // console.log(bookList);

  const pageSize = 12;
  const numPages = Math.ceil(bookList.length / pageSize);

  const [page, setPage] = React.useState(0);
  const handlePageChange = (event, newPage) => {
    setPage(newPage - 1);
  };

  const [selectedFilter, setSelectedFilter] = React.useState([]);
  const handleSelectedFilterChange = (event) => {
    setSelectedFilter(event);
  };

  const [selectedSort, setSelectedSort] = React.useState(null);
  const handleSelectedSortChange = (event) => {
    setSelectedSort(event);
  };

  return (
    <Box sx={{ margin: 10 }}>
      <Typography level="h1" fontSize="">
        Books
      </Typography>

      <Box
        sx={{
          display: 'flex',
          overflow: 'auto',
        }}
      >
        <Box
          sx={{ width: '25%' }}
          marginRight={2}
          marginTop={2}
        >
          <BookSortChips
            selected={selectedSort}
            setSelected={handleSelectedSortChange}
          />
          <BookFilterChips
            selected={selectedFilter}
            setSelected={handleSelectedFilterChange}
          />
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} mt={1}>
            {bookList.slice(page * pageSize, (page + 1) * pageSize).map((book) => (
              <Grid key={book.id} item xs={12} sm={6} md={6} lg={3}>
                <BookCard key={book.id} {...book} />
              </Grid>
            )
            )}
          </Grid>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: 2
            }}
          >
            <Pagination
              count={numPages}
              page={page + 1}
              onChange={handlePageChange}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}