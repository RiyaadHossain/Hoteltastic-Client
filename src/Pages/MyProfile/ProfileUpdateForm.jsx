import { Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const ProfileUpdateForm = () => {
  const [value, setValue] = React.useState("one");

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="Item One" />
        <Tab value="two" label="Item Two" />
        <Tab value="three" label="Item Three" />
      </Tabs>
    </Box>
  );
};

export default ProfileUpdateForm;
