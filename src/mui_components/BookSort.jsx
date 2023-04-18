import * as React from 'react';
import Chip from '@mui/material/Chip';
import Box from '@mui/joy/Box';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Typography from '@mui/joy/Typography';

const sortingCriteria = [
  'Latest',
  'Oldest',
  'Price (ascending)',
  'Price (descending)',
  'Best Seller'
];

function SortChips(props) {
  const { selected, setSelected } = props;

  const handleChipClick = (criterion) => {
    if (selected === criterion) {
      setSelected(null);
    } else {
      setSelected(criterion);
    }
  };

  return (
    <Box
      className='sort-box'
      sx={{
        display: 'flexbox',
        flexWrap: 'wrap',
      }}
    >
      <Typography>
        Sort
      </Typography>
      {sortingCriteria.map((criterion) => {
        const chipSelected = selected === criterion;
        const disabled = selected !== null && selected !== criterion;
        const clickable = !disabled || selected === criterion;
        return (
          <Chip
            key={criterion}
            label={criterion}
            onClick={() => handleChipClick(criterion)}
            color={chipSelected ? 'primary' : 'default'}
            variant={chipSelected ? 'soft' : 'outlined'}
            sx={{
              m: 0.5,
              ...(chipSelected && {
                backgroundColor: 'primary.light',
                color: 'primary.contrastText',
              }),
              cursor: disabled ? 'default' : 'pointer',
            }}
          />
        );
      })}
    </Box>
  );
}

export default SortChips;