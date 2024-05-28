import React from "react";
import { Box } from "@mui/material";
import "./css/KitchenPage.css";

const OrderBoard = ({ tableNo, values }) => {
  const menuNameLength = (menuName) => (menuName.length > 6 ? menuName.substring(0, 6) : menuName);

  return (
    <Box
      className="orderBoardBox"
      sx={{
        top: "-1vh",
        color: "#3c2a2c",
        position: "relative",
        border: "3px solid #4D83BD",
        width: "23.5vw",
        height: "88vh",
        borderRadius: 5,
        display: "inline-block",
        margin: "0.4%",
        boxSizing: "border-box",
        backgroundColor: "#E7E7E7",
        transition: "background-color 0.5s",
        "&:hover": {
          backgroundColor: "#8A7E72",
          cursor: "pointer",
        },
      }}
    >
      <div className="kitchenDiv">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "1.8vw",
            width: "100%",
            padding: "0.5vw",
            fontWeight: "bolder",
            marginBottom: "1vh",
            position: "relative",
          }}
        >
          <div>
            <span>Order No. {values[0].order_id}</span>
            <br />
            <span>Table No. {tableNo}</span>
          </div>
          <span style={{ position: "absolute", top: "3vh", right: "2vw", fontSize: "1.8vw" }}>
            16:00
          </span>
        </div>
        <div>
          {values.map((order, index) => (
            <div className="tableDiv" key={index} style={{ marginTop: "3vh" }}>
              {menuNameLength(order.menu_name)} {order.order_cnt > 1 ? order.order_cnt : ""}
            </div>
          ))}
        </div>
      </div>
    </Box>
  );
};

export default OrderBoard;