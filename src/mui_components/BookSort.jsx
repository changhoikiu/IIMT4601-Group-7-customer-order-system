import * as React from 'react';
import Chip from '@mui/joy/Chip';
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
    const {selected, setSelected} = props;

    const handleChipClick = (criterion) => {
        if (selected === criterion) {
            setSelected(null);
          } else {
            setSelected(criterion);
          }
    };
  return (
    <Box
      sx={{
        display: 'flexbox',
        flexWrap: 'wrap',
      }}
    >
      <Typography level="h4" fontSize="lg" id="card-description" my={1}>
        Sort
      </Typography>
      {sortingCriteria.map((criterion) => {
        const chipSelected = selected === criterion;
        const disabled = selected !== null && selected !== criterion;
        const clickable = !disabled || selected === criterion;
        return (
          <Chip
          key={criterion}
          disabled={disabled}
          clickable={clickable}
          variant={chipSelected ? 'solid' : 'soft'}
          endDecorator={chipSelected && <CloseRoundedIcon />}
          onClick={() => handleChipClick(criterion)}
            sx={{ 
              m: 0.5,
              ...(chipSelected && {
                backgroundColor: 'primary.light',
                color: 'primary.contrastText',
              }),
              cursor: disabled ? 'default' : 'pointer',
            }}
          >
            {criterion}
          </Chip>
        );
      })}
    </Box>
  );
}

export default SortChips;