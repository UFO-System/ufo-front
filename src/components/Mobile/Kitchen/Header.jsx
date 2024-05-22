import React from "react";
import { Button, Pagination, Stack } from "@mui/material";
import "./css/KitchenPage.css";

const Header = () => {
  return (
    <div>
      <Button
        className="headerButton"
        variant="contained"
        size="large"
        sx={{
          position: "absolute",
          top: "0.7vh",
          left: "5vw",
          width: "15vw",
          fontSize: "1vw",
          height: "50px",
          borderRadius: 5,
          backgroundColor: "#7AA2E3",
          "&:hover": {
            backgroundColor: "#4285f4",
          },
          transition: "background-color 0.5s",
        }}
      >
        주문 되돌리기
      </Button>
      <Pagination
      showFirstButton 
      showLastButton
      count={10} 
      size="large"
      sx={{
        position: "absolute", 
        top: "1.5vh",
        right: "5vw",
        color: "white"
        }}/>
    </div>
    
  );
};

export default Header;