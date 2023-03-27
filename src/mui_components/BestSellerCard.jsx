// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
// import Box from '@mui/material/Box';

// export function BestSellerCard() {

//   // const [open, setOpen] = React.useState( false );

//   return (
//     <Card sx={{ maxWidth: "inherit" }}>
//       <CardActionArea>
//         <Box sx={{ display: 'flex' }}>
//         <CardContent>
//             <Typography gutterBottom variant="h6" component="div">
//               Ranking
//             </Typography>
//           </CardContent>
//           <CardContent>
//             <Typography gutterBottom variant="h6" component="div">
//               Title
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               Author:
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               Publisher:
//             </Typography>
//             <Typography variant="body2" fontWeight="bold">
//               $100 HKD
//             </Typography>
//           </CardContent>
//           <CardMedia
//             component="img"
//             image="./logo.png"
//             alt="book cover"

//           />
//         </Box>
//       </CardActionArea>
//     </Card>
//   );
// }

import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';
import { textAlign } from '@mui/system';

function BestSellerCard( {i}) {
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
      <AspectRatio ratio="1" sx={{ width: 90 }}>
        <img
          src=""
          srcSet=""
          loading="lazy"
          alt="Book cover"
        />
      </AspectRatio>
      <div>
        <Typography level="h2" fontSize="lg" id="card-description" mb={0.5}>
          TItle
        </Typography>
        <Typography fontSize="sm" aria-describedby="card-description" mb={1}>
          <Link
            overlay
            underline="none"
            href="#interactive-card"
            sx={{ color: 'text.tertiary' }}
          >
            Author
          </Link>
        </Typography>
        <Typography fontSize="sm" aria-describedby="card-description" mb={1}>
          <Link
            overlay
            underline="none"
            href="#interactive-card"
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