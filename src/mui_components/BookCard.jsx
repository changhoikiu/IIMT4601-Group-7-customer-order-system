import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export function BookCard() {

  // const [open, setOpen] = React.useState( false );

  return (
    <Card sx={{ maxWidth: "md" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image=""
          alt="book cover"
        />
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
      </CardActionArea>
    </Card>
  );
}