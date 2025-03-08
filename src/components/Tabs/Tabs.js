import * as React from "react";
import PropTypes from "prop-types"; // ✅ Fixed import
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styles from "./Tabs.module.css";
import { useState } from "react";

// Custom Tab Panel Component
function CustomTabPanel(props) {
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

// ✅ Fixed propTypes declaration
CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

// Accessibility props for tabs
function allyProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

// Main Tabs Component
export default function BasicTabs({ filteredData }) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    filteredData(newValue);
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs"
          TabIndicatorProps={{ style: { backgroundColor: "#34c94b" } }}
          sx={{ "& .MuiTab-root": { color: "#34c94b" } }} // ✅ Applied correct text color
          className={styles.tabs}
        >
          <Tab label="All" {...allyProps(0)} />
          <Tab label="Rock" {...allyProps(1)} />
          <Tab label="Pop" {...allyProps(2)} />
          <Tab label="Jazz" {...allyProps(3)} />
          <Tab label="Blues" {...allyProps(4)} />
        </Tabs>
      </Box>
    </Box>
  );
}

// ✅ PropTypes validation for BasicTabs
BasicTabs.propTypes = {
  filteredData: PropTypes.func.isRequired,
};
