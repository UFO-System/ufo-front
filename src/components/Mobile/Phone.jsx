import React from "react";
import { Box, Button } from "@mui/material";
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
          p: "1vh",
          alignItems: "center",
          justifyContent: "center",
          width: "96%",
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
          주문화면
        </Button>
        <Button
          variant="contained"
          onClick={() => navigate("/KitchenPage")}
          sx={{ height: "48vh", width: "95%" }}
        >
          부엌화면
        </Button>
      </Box>
    </div>
  );
};

export default Phone;
