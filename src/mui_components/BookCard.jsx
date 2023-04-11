import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import BookDetailsDrawer from './BookDetailDrawer';

export default function BookCard(book) {
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
        sx={{
          gap: 2,
          '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
          width: '100%',
          height: '100%',
        }}
      >
        <AspectRatio
          ratio="6/9"
          sx={{ width: 'fitContent' }}>
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
            <Typography level="h4" fontSize="lg" id="card-description" mb={1}>
              {book.title}
            </Typography>
          </Link>
          <Typography
            aria-describedby="card-description"
            sx={{
              fontSize: 'sm',
              color: 'text.tertiary',
              mb: 0.5
            }}
          >
            {book.authors.join(', ')}
          </Typography>
          <Typography
            aria-describedby="card-description"
            sx={{
              fontSize: 'sm',
              color: 'text.tertiary',
              mb: 1
            }}
          >
            {book.publisher}
          </Typography>
          <Box
            sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
          >
            <Typography level="h5" fontSize="lg" id="card-description">
              ${book.price}
            </Typography>
            <Chip>
              new
            </Chip>
          </Box>
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