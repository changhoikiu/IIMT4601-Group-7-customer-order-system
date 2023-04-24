import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Link from "@mui/joy/Link";
import Card from "@mui/joy/Card";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import BookDetailsDrawer from "./BookDetailDrawer";

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
          "&:hover": {
            boxShadow: "md",
            borderColor: "neutral.outlinedHoverBorder",
          },
          width: "100%",
          height: "100%",
        }}
      >
        <AspectRatio ratio="6/9" sx={{ width: "fitContent" }}>
          <img
            src={book.Book_Cover}
            loading="lazy"
            alt={book.Book_Title}
            style={{ display: "block" }}
          />
        </AspectRatio>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Link
            overlay
            underline="none"
            onClick={handleCardClick}
            sx={{ color: "text.tertiary" }}
          >
            <Typography level="h4" fontSize="lg" id="card-description" mb={1}>
              {book.Book_Title}
            </Typography>
          </Link>
          <Typography
            aria-describedby="card-description"
            sx={{
              fontSize: "sm",
              color: "text.tertiary",
              mb: 0.5,
            }}
          >
            {book.Author}
          </Typography>
          <Typography
            aria-describedby="card-description"
            sx={{
              fontSize: "sm",
              color: "text.tertiary",
              mb: 1,
            }}
          >
            {book.Publisher}
          </Typography>
          <Box
            className="price"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: "auto",
            }}
          >
            <Typography level="h5" fontSize="lg" id="card-description">
              ${book.Selling_Price}
            </Typography>
            {(new Date() - new Date(book.Last_Update_Date)) < 432000000 && (
              <Chip>New</Chip>
            )}
          </Box>
        </Box>
      </Card>
      <BookDetailsDrawer
        isOpen={isDrawerOpen}
        onClose={handleDrawerClose}
        book={book}
      />
    </>
  );
}
