import React from "react";
import "./css/KitchenPage.css";
import { Box } from "@mui/material";

const OrderBoard = ({ tableNo, values }) => {
  const menuNameLength = (menuName) => {
    if (menuName.length >= 6) {
      return <>{menuName.substring(0, 6)}</>;
    } else {
      return menuName;
    }
  };

  return (
    <Box
      sx={{
        color: "#3c2a2c",
        position: "relative",
        border: "3px solid #4D83BD",
        width: "23.5vw",
        height: "88vh",
        borderRadius: 5,
        display: "inline-block",
        top: "-1vh",
        left: `1.5vw`,
        margin: "0.4%",
        boxSizing: "border-box",
        "&:hover": {
          backgroundColor: "#8A7E72",
          transition: "0.5s",
          cursor: "pointer",
        },
        "&:not(:hover)": {
          backgroundColor: "#E7E7E7",
          transition: "background-color 0.5s",
        },
      }}
    >
      <div className="kitchenDiv">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "25px",
            width: "100%",
            padding: "5px",
            fontWeight: "bolder",
            marginBottom: "10px",
            position: "relative",
          }}
        >
          <div>
            <span>Order No. {values[0].order_id}</span>
            <br />
            <span>Table No. {tableNo}</span>
          </div>
          <span style={{ position: "absolute", top: "25px", right: "35px", fontSize: "30px"}}>
            16:00
          </span>
        </div>
        <div style={{ padding: "5px" }}>
          {values.map((order, index) => (
            <div className="tableDiv" key={index} style={{ margin: "30px auto" }}>
              {menuNameLength(order.menu_name)} {order.order_cnt === 1 ? "" : order.order_cnt}
            </div>
          ))}
        </div>
      </div>
    </Box>
  );
};

export default OrderBoard;