import * as React from "react";
import BestSellerCard from "../mui_components/BestSellerCard";
import Typography from "@mui/joy/Typography";
import { State } from "../context/Context";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import StarRoundedIcon from "@mui/icons-material/StarRounded";
import data from "../context/bestsellers";

import Amplify, { API } from "aws-amplify";

export default function BestSellers() {
  const {
    state: { bookList },
  } = State();

  const [year, setYear] = React.useState(new Date().getFullYear());
  const handleChangeYear = (event) => {
    setYear(event.target.value);
    setBestSeller(getBestSeller(event.target.value, month));
  };

  const [month, setMonth] = React.useState(new Date().getMonth() - 1);
  const handleChangeMonth = (event) => {
    setMonth(event.target.value);
    setBestSeller(getBestSeller(year, event.target.value));
  };

  const [bestSeller, setBestSeller] = React.useState(
    getBestSeller(year, month)
  );

  // console.log(data);

  function getBestSeller(selectedYear, selectedMonth) {
    let selected = [];
    data.forEach((record) => {
      if (record.Year === selectedYear && record.Month === selectedMonth) {
        selected = record.Bestsellers;
      }
    });
    return selected;
  }

  // console.log("selected", bestSeller);

  // React.useEffect(() => {
  //   const myAPI = "customer";
  //   const path = "/bestseller";

  //   API.get(myAPI, path + "/" + year + "/" + month)
  //     .then((response) => {
  //       setBestSeller(response.Bestsellers);
  //     })
  //     .catch((error) => {
  //       console.log(error.response);
  //     });
  // }, []);

  const themeColor = "#0d4fa2";
  return (
    <div>
      <Typography level="h4" sx={{ color: themeColor }}>
        <StarRoundedIcon />
        &nbsp;&nbsp;Monthly Best Sellers
      </Typography>
      <Typography sx={{ marginTop: 2 }}>Search for past records:</Typography>
      <Box
        sx={{
          mt: 1,
          maxWidth: 250,
          display: "flex",
        }}
      >
        <FormControl fullWidth sx={{ mr: 1 }}>
          <InputLabel id="year">Year</InputLabel>
          <Select
            labelId="year"
            id="year"
            value={year}
            label="Year"
            onChange={handleChangeYear}
          >
            <MenuItem value={2016}>2016</MenuItem>
            <MenuItem value={2017}>2017</MenuItem>
            <MenuItem value={2018}>2018</MenuItem>
            <MenuItem value={2019}>2019</MenuItem>
            <MenuItem value={2020}>2020</MenuItem>
            <MenuItem value={2021}>2021</MenuItem>
            <MenuItem value={2022}>2022</MenuItem>
            <MenuItem value={2023}>2023</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="month">Month</InputLabel>
          <Select
            labelId="month"
            id="month"
            value={month}
            label="Month"
            onChange={handleChangeMonth}
          >
            //(1,2,3)
            <MenuItem value={0}>January</MenuItem>
            <MenuItem value={1}>February</MenuItem>
            <MenuItem value={2}>March</MenuItem>
            <MenuItem value={3}>April</MenuItem>
            <MenuItem value={4}>May</MenuItem>
            <MenuItem value={5}>June</MenuItem>
            <MenuItem value={6}>July</MenuItem>
            <MenuItem value={7}>August</MenuItem>
            <MenuItem value={8}>September</MenuItem>
            <MenuItem value={9}>October</MenuItem>
            <MenuItem value={10}>November</MenuItem>
            <MenuItem value={11}>December</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box
        className="best-seller-card-box"
        sx={{
          marginTop: 2,
        }}
      >
        {bestSeller !== null
          ? bestSeller.map((book, index) => {
              return (
                <BestSellerCard book={book} i={index + 1} key={book.Book_id} />
              );
            })
          : console.log("loading...")}
      </Box>
    </div>
  );
}
