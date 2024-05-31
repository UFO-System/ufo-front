import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { isMobile } from "react-device-detect";
import { useParams, useNavigate } from "react-router-dom";

const UserPage = () => {
  const { group, tableid } = useParams();
  const navigate = useNavigate();

  const handleKitchenPageClick = () => {
    navigate("/UserKitchenPage");
  };

  return (
    <div>
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
          //   onClick={}
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

export default UserPage;
