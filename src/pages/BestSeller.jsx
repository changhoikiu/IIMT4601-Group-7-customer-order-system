import BestSellerCardGrid from "../components/BestSellerCardGrid";
import ResponsiveAppBar from "../components/Header";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function BestSeller() {
    return (
        <Box mx={10}>
            <ResponsiveAppBar />
            <Typography variant="h3" sx={{pt: 4}}>
                Monthly Best Sellers
            </Typography>
            <BestSellerCardGrid />
        </Box>
    )
}