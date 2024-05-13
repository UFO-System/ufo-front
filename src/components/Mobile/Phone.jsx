import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./css/Phone.css";

const Phone = () => {
  const navigate = useNavigate();
  return (
    <div className="button-container">
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: "2vh",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          minHeight: "98vh",
        }}
      >
        <Button
          variant="contained"
          onClick={() => navigate("/OrderPage1")}
          sx={{
            height: "48vh",
            width: "95%",
          }}
        >
          <Typography variant="h3">주문화면</Typography>
        </Button>
        <Button
          variant="contained"
          onClick={() => navigate("/KitchenPage")}
          sx={{ height: "48vh", width: "95%" }}
        >
          <Typography variant="h3">부엌화면</Typography>
        </Button>
      </Box>
    </div>
  );
};

export default Phone;
