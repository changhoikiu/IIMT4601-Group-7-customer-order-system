import BestSellerCardGrid from "../mui_components/BestSellerCardGrid";
import ResponsiveAppBar from "../mui_components/Header";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import SelectYearMonth from "../mui_components/SelectYearMonth";

export default function BestSeller() {
    return (
        <div>
        <ResponsiveAppBar />
        <Box mx={10}>

            <Typography variant="h5" sx={{pt: 4}}>
                Monthly Best Sellers
            </Typography>
            <SelectYearMonth />
            <BestSellerCardGrid />
        </Box>
        </div>

    )
}