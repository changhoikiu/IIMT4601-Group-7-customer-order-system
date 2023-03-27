import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Typography } from '@mui/material';

function SelectYearMonth() {
  const [year, setYear] = React.useState('');

  const handleChangeYear = (event) => {
    setYear(event.target.value);
  };

  const [month, setMonth] = React.useState('');

  const handleChangeMonth = (event) => {
    setMonth(event.target.value);
  };

  return (
    <div>
      <Typography sx={{ ml: 4, mt: 3 }}>
        Search for past records:
      </Typography>
      <Box sx={{ ml: 4, mt: 1, maxWidth: 250, display: 'flex' }}>
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
            <MenuItem value={1}>January</MenuItem>
            <MenuItem value={2}>February</MenuItem>
            <MenuItem value={3}>March</MenuItem>
            <MenuItem value={4}>April</MenuItem>
            <MenuItem value={5}>May</MenuItem>
            <MenuItem value={6}>June</MenuItem>
            <MenuItem value={7}>July</MenuItem>
            <MenuItem value={8}>August</MenuItem>
            <MenuItem value={9}>September</MenuItem>
            <MenuItem value={10}>October</MenuItem>
            <MenuItem value={11}>November</MenuItem>
            <MenuItem value={12}>December</MenuItem>

          </Select>
        </FormControl>
      </Box>
    </div>
  );
}

export default SelectYearMonth;