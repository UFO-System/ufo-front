import React from "react";
import { Box } from "@mui/material";
import SalesDateSelector from "./SalesDateSelector";
import SalesDetailViewer from "./SalesDetailViewer";

const salesItem = [
  { time: "10:20", menu: "김치찜", price: 10000 },
  { time: "09:21", menu: "계란찜", price: 19900 },
  { time: "13:22", menu: "수육", price: 14950 },
];

const SalesManage = () => {
  return (
    <>
      <Box sx={{ display: { md: "flex" } }}>
        <Box
          sx={{
            display: { xs: "flex", md: "inline-block" },
            justifyContent: "space-between",
            ml: "10px",
            mr: "10px",
            width: { md: "40%" },
            mb: "20px",
          }}
        >
          <SalesDateSelector />
        </Box>
        <Box
          sx={{
            display: { xs: "flex", md: "inline-block" },
            marginLeft: "10px",
            marginRight: "10px",
            justifyContent: "space-between",
            ml: "10px",
            width: { md: "60%" },
          }}
        >
          <SalesDetailViewer data={salesItem} />
        </Box>
      </Box>
    </>
  );
};

export default SalesManage;
