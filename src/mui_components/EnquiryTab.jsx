import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function EnquiryTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Order a book" {...a11yProps(0)} />
          <Tab label="Cancel a reservation/order" {...a11yProps(1)} />
          <Tab label="Others" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        You can order a book that is now not offering by us. We will get the
        book for you soon. <br />
        ############################# <br />
        Book name: <br />
        Author(s): <br />
        Publisher: <br />
        Genre: <br />
        ############################# <br />
      </TabPanel>
      <TabPanel value={value} index={1}>
        If you no longer need the book reserved or ordered, please provide us
        with the details of your reservation/order. <br />
        ############################# <br />
        Book name: <br />
        Authors(s): <br />
        ############################# <br />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Please freely ask us anything. <br />
        ############################# <br />
      </TabPanel>
    </Box>
  );
}