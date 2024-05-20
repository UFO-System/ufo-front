import React from "react";
import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./css/Phone.css";
import LogoutTopBar from "../Desktop/commons/TopBar/LogoutTopBar";

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
    <div className="button-container">
      <LogoutTopBar />
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
