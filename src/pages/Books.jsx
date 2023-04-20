import * as React from "react";

import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";

import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";

import BookCard from "../mui_components/BookCard";
import BookFilterChips from "../mui_components/BookFilterChips";
import BookSortChips from "../mui_components/BookSort";

import { State } from "../context/Context";

export default function Books() {
  const {
    state: { bookList },
  } = State();

  const pageSize = 12;

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

  const [searchQuery, setSearchQuery] = React.useState("");
  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
    setPage(0);
  };

  console.log(selectedFilter);
  console.log(selectedSort);

const filteredBookList = bookList.filter((book) => {
  let searchLower, titleLower, authorsLower, publisherLower;
  try {
    searchLower = searchQuery.toLowerCase();
    titleLower = book.book_title.toLowerCase();
    authorsLower = book.author.map((a) => a.toLowerCase()).join(" ");
    publisherLower = book.publisher.toLowerCase();
  } catch (err) {
    searchLower = searchQuery;
    titleLower = book.book_title;
    authorsLower = book.author.map((a) => a).join(" ");
    publisherLower = book.publisher;
  }
  if (selectedFilter.length === 0) {
    return (
      titleLower.includes(searchLower) ||
      authorsLower.includes(searchLower) ||
      publisherLower.includes(searchLower)
    );
  } else {
    return (
      selectedFilter.includes(book.genre) &&
      (titleLower.includes(searchLower) ||
        authorsLower.includes(searchLower) ||
        publisherLower.includes(searchLower))
    );
  }
});
  
  const sortedBookList = filteredBookList.sort((a, b) => {
    if (selectedSort === "Price (ascending)") {
      return a.selling_price - b.selling_price;
    } else if (selectedSort === "Price (descending)") {
      return b.selling_price - a.selling_price;
    } else if (selectedSort === "Latest") {
      const a_date = new Date(a.last_update);
      const b_date = new Date(b.last_update);
      return b_date.getTime() - a_date.getTime();
    } else if (selectedSort === "Oldest") {
      const a_date = new Date(a.last_updated);
      const b_date = new Date(b.last_updated);
      return a_date.getTime() - b_date.getTime();
    } else if (selectedSort === "Best Seller") {
      return b.sold_quantity - a.sold_quantity;
    }
  });

  console.log(filteredBookList);


  const numPages = Math.ceil(filteredBookList.length / pageSize);

  return (
    <>
      <Typography level="h4">
        <MenuBookRoundedIcon />
        &nbsp;&nbsp;Books
      </Typography>

      <Box
        className="content-box"
        sx={{
          display: "flex",
          overflow: "auto",
          marginTop: 2,
        }}
      >
        <Box
          className="filter-Box"
          sx={{
            maxWidth: "25%",
            marginRight: 2,
          }}
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
        <Box
          className="book-card-box"
          sx={{
            flexGrow: 1,
            marginTop: 2,
          }}
        >
          <Box
            className="search-bar-box"
            sx={{
              marginBottom: 2,
            }}
          >
            <TextField
              label="Search"
              variant="standard"
              size="small"
              fullWidth
              value={searchQuery}
              onChange={handleSearchQueryChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchRoundedIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          {filteredBookList.length > 0 ? (
            <>
              <Grid container spacing={2}>
                {filteredBookList
                  .slice(page * pageSize, (page + 1) * pageSize)
                  .map((book) => (
                    <Grid key={book.id} item xs={12} sm={6} md={6} lg={3}>
                      <BookCard key={book.id} {...book} />
                    </Grid>
                  ))}
              </Grid>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: 2,
                }}
              >
                <Pagination
                  count={numPages}
                  page={page + 1}
                  onChange={handlePageChange}
                />
              </Box>
            </>
          ) : (
            <Typography variant="body1">No books found.</Typography>
          )}
        </Box>
      </Box>
    </>
  );
}
