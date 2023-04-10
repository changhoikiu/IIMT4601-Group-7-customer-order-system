import BestSellerCard from "../mui_components/BestSellerCard";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import SelectYearMonth from "../mui_components/SelectYearMonth";
import { State } from "../context/Context";


export default function BestSellers() {

    const {
        state: { cart },
        dispatch,
    } = State();
    return (
        <div>
        <Box mx={10}>
            <Typography variant="h5" sx={{pt: 4}}>
                Monthly Best Sellers
            </Typography>
            <SelectYearMonth />
            <BestSellerCard />
        </Box>
        </div>

    )
}