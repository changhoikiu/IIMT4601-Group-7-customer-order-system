import BestSellerCardGrid from "../mui_components/BestSellerCardGrid";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import SelectYearMonth from "../mui_components/SelectYearMonth";

export default function BestSellers() {
    return (
        <div>
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