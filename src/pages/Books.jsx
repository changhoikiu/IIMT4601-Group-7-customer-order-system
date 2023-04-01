import ResponsiveAppBar from "../mui_components/Header";
import CheckboxesGroup from "../mui_components/FilterSort";
import CardGrid from "../mui_components/BookCardGrid";
import BasicBreadcrumbs from "../mui_components/Breadcrumb";
import { Box } from "@mui/material";

export default function Books() {
    return (
      <Box mx={10}>
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