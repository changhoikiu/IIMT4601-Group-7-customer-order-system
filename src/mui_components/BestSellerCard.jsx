import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';
import BookDetailsDrawer from './BookDetailDrawer';
import { textAlign } from '@mui/system';

function BestSellerCard({ book, i }) {

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleCardClick = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <Card
        variant="outlined"
        orientation="horizontal"
        sx={{
          my: 2,
          gap: 2,
          '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
        }}
      >
        <Chip
          sx={{
            width: 50,
            height: 50,
            textAlign: 'center',
            alignSelf: 'center'
          }}
        >
          {i}
        </Chip>
        <AspectRatio
          ratio="6/9"
          sx={{ width: 90 }}>
          <img
            src={book.cover}
            loading="lazy"
            alt={book.title}
            style={{ display: 'block' }}
          />
        </AspectRatio>
        <div>
          <Link
            overlay
            underline="none"
            onClick={handleCardClick}
            sx={{ color: 'text.tertiary' }}
          >
            <Typography level="h2" fontSize="lg" id="card-description" mb={1}>
              {book.title}

            </Typography>
          </Link>
          <Typography fontSize="sm" aria-describedby="card-description" mb={1}>
            Authors: {book.authors}
          </Typography>
          <Typography fontSize="sm" aria-describedby="card-description" mb={1}>

            Publisher: {book.publisher}
          </Typography>
        </div>
      </Card>
      <BookDetailsDrawer
        isOpen={isDrawerOpen}
        onClose={handleDrawerClose}
        book={book}
      />
    </>
  );
}

export default BestSellerCard;