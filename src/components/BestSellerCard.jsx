import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';

export function BestSellerCard() {

  // const [open, setOpen] = React.useState( false );

  return (
    <Card sx={{ maxWidth: "inherit" }}>
      <CardActionArea>
        <Box sx={{ display: 'flex' }}>
        <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Ranking
            </Typography>
          </CardContent>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Title
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Author:
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Publisher:
            </Typography>
            <Typography variant="body2" fontWeight="bold">
              $100 HKD
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            image="./logo.png"
            alt="book cover"

          />
        </Box>
      </CardActionArea>
    </Card>
  );
}