import React from 'react';
import { Box } from "@mui/material";

const UserOrderBoard = ({ values, index }) => {
  return (
    <Box
      sx={{
        position: "relative",
        border: "3px solid #4D83BD",
        width: "80vw",
        height: "20vh",
        borderRadius: 5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "3%",
        boxSizing: "border-box",
        backgroundColor: "#E7E7E7",
        transition: "background-color 0.5s"
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "-1vh",
          left: "-3vh",
          backgroundColor: "#efefef",
          padding: "1vh",
          borderRadius: "50%",
          border: "3px solid #4D83BD",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "5vh",
          height: "5vh",
          fontWeight: "bolder",
          fontSize: "1.5rem"
        }}
      >
        {index}
      </Box>
      <div>
        <div
          style={{
            fontSize: "2.5rem",
            width: "100%",
            padding: "0.5vw",
            fontWeight: "bolder",
            marginBottom: "1vh",
            position: "relative",
          }}
        >
          <div>
            <span>Order No. {values[0].order_id}</span>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default UserOrderBoard;
