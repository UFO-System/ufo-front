import React from 'react'
import { Box } from "@mui/material";

const UserOrderBoard = ({ values }) => {

  return (
    <Box
      sx={{
        top: "-1vh",
        color: "#3c2a2c",
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

export default UserOrderBoard
