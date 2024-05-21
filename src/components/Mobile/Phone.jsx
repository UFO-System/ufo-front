import React from "react";
import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
  Toolbar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./css/Phone.css";

const Phone = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const handleOrderPageClick = () => {
    navigate("/OrderPage1");
  };

  const handleKitchenPageClick = () => {
    navigate("/KitchenPage");
  };

  return (
    <div>
      <Button
        variant="contained"
        size="large"
        sx={{
          position: "absolute",
          display: "inline",
          top: "10px",
          right: "5vw",
          color: "white",
        }}
        onClick={() => navigate("/OrderManage")}
      >
        관리자 화면
      </Button>
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: "2vh",
          padding: "1vw",
          alignItems: "center",
          justifyContent: "center",
          width: "98vw",
          maxHeight: "50vh",
        }}
      >
        <Button
          variant="contained"
          onClick={handleOrderPageClick}
          sx={{
            width: "100%",
            height: isMobile ? "48vh" : "48vh",
          }}
        >
          <Typography variant="h3">주문화면</Typography>
        </Button>
        <Button
          variant="contained"
          onClick={handleKitchenPageClick}
          sx={{
            width: "100%",
            height: isMobile ? "48vh" : "48vh",
          }}
        >
          <Typography variant="h3">부엌화면</Typography>
        </Button>
      </Box>
    </div>
  );
};

export default Phone;
