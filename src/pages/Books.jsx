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

  // console.log(selectedFilter);
  // console.log(selectedSort);

  const filteredBookList = bookList.filter((book) => {
    let searchLower, titleLower, authorsLower, publisherLower;
    try {
      searchLower = searchQuery.toLowerCase();
      titleLower = book.Book_Title.toLowerCase();
      authorsLower = book.Author.toLowerCase();
      publisherLower = book.Publisher.toLowerCase();
    } catch (err) {
      searchLower = searchQuery;
      titleLower = book.Book_Title;
      authorsLower = book.Author;
      publisherLower = book.Publisher;
    }
    if (selectedFilter.length === 0) {
      return (
        titleLower.includes(searchLower) ||
        authorsLower.includes(searchLower) ||
        publisherLower.includes(searchLower)
      );
    } else {
      return (
        selectedFilter.includes(book.Genre) &&
        (titleLower.includes(searchLower) ||
          authorsLower.includes(searchLower) ||
          publisherLower.includes(searchLower))
      );
    }
  });

  const sortedBookList = filteredBookList.sort((a, b) => {
    if (selectedSort === "Price (ascending)") {
      return a.Selling_Price - b.Selling_Price;
    } else if (selectedSort === "Price (descending)") {
      return b.Selling_Price - a.Selling_Price;
    } else if (selectedSort === "Latest") {
      const a_date = new Date(a.Last_Update_Date);
      const b_date = new Date(b.Last_Update_Date);
      return b_date.getTime() - a_date.getTime();
    } else if (selectedSort === "Oldest") {
      const a_date = new Date(a.Last_Update_Date);
      const b_date = new Date(b.Last_Update_Date);
      return a_date.getTime() - b_date.getTime();
    } else if (selectedSort === "Best Seller") {
      return b.Sold_Quantity - a.Sold_Quantity;
    }
  });

  // console.log(filteredBookList);

  const numPages = Math.ceil(filteredBookList.length / pageSize);

  const themeColor = "#0d4fa2";
  return (
    <>
      <Typography level="h4" sx={{color:themeColor}}>
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
                    <Grid key={book.Book_id} item xs={12} sm={6} md={6} lg={3}>
                      <BookCard key={book.Book_id} {...book} />
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
