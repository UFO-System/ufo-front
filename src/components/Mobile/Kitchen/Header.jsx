import React from "react";
import "./css/KitchenPage.css";
import { Box } from "@mui/material";
import { Button } from "@mui/material";

const Header = () => {
  return (
    <div>
      <Button
        variant="contained"
        size="large"
        sx={{
          position: "absolute",
          top: "1vh",
          left: "5vw",
          width: "15vw",
          height: "7vh",
          borderRadius: 5,
          "&hover": {
            backgroundColor: "#4285f4",
          },
          "&:not(:hover)": {
            backgroundColor: "#7AA2E3",
            transition: "background-color 0.5s",
          },
        }}
      >
        {" "}
        주문 되돌리기
      </Button>
      <Button
        variant="contained"
        sx={{
          position: "absolute",
          top: "1vh",
          right: "6vw",
          width: "8vw",
          height: "7vh",
          borderRadius: 5,
          "&hover": {
            backgroundColor: "#4285f4",
          },
          "&:not(:hover)": {
            backgroundColor: "#7AA2E3",
            transition: "background-color 0.5s",
          },
        }}
      >
        다음 페이지
      </Button>
      <Button
        variant="contained"
        sx={{
          position: "absolute",
          top: "1vh",
          right: "15vw",
          width: "8vw",
          height: "7vh",
          borderRadius: 5,
          "&hover": {
            backgroundColor: "#4285f4",
          },
          "&:not(:hover)": {
            backgroundColor: "#7AA2E3",
            transition: "background-color 0.5s",
          },
        }}
      >
        이전 페이지
      </Button>
    </div>
  );
};

export default Header;
