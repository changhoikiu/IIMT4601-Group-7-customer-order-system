import ResponsiveAppBar from "../components/Header";
import CheckboxesGroup from "../components/FilterSort";
import CardGrid from "../components/BookCardGrid";
import BasicBreadcrumbs from "../components/Breadcrumb";
import { Box } from "@mui/material";

export default function Books() {
    return (
      <Box mx={10}>
        <ResponsiveAppBar />
        <Box sx={{display: 'flex'}}>
            <CheckboxesGroup />
            <Box sx={{display: 'block'}}>
                <BasicBreadcrumbs />
                <CardGrid />
            </Box>
        </Box>
      </Box>
    );
  }