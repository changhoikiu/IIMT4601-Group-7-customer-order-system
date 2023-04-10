import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';
import { textAlign } from '@mui/system';

function BestSellerCard({book, i}) {

  return (
    <Card
      variant="outlined"
      orientation="horizontal"
      sx={{

        gap: 2,
        '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
      }}
    >
      <Chip
        sx={{
          width:50, 
          height:50,
          textAlign: 'center',
          alignSelf: 'center'
        }}
      >
        {i}
      </Chip>
      <AspectRatio ratio="6/9" sx={{ width: 90 }}>
        <img
          src=""
          srcSet=""
          loading="lazy"
          alt="Book cover"
        />
      </AspectRatio>
      <div>
        <Typography level="h2" fontSize="lg" id="card-description" mb={0.5}>
          Title
        </Typography>
        <Typography fontSize="sm" aria-describedby="card-description" mb={1}>
            Author
        </Typography>
        <Typography fontSize="sm" aria-describedby="card-description" mb={1}>
          <Link
            overlay
            underline="none"
            sx={{ color: 'text.tertiary' }}
          >
            Publisher
          </Link>
        </Typography>
      </div>
    </Card>
  );
}

export default BestSellerCard;