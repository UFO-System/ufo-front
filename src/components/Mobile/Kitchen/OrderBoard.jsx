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
      <table className="kitchenTable">
        <tr>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "25px",
              width: "100%",
              padding: "5px",
              fontWeight: "bolder",
            }}
          >
            <div>
              <span>Order No. {values[0].order_id}</span>
              <br />
              <span>Table No. {tableNo}</span>
            </div>
            <span style={{ alignSelf: "center", marginRight: "30px", fontSize: "30px" }}>
              16:00
            </span>
          </div>
        </tr>

        {values.map((order, index) => (
          <tr key={index}>
            <td colSpan="3">
              {menuNameLength(order.menu_name)}{" "}
              {order.order_cnt === 1 ? "" : order.order_cnt}
            </td>
          </tr>
        ))}
      </table>
    </Box>
  );
};

export default OrderBoard;