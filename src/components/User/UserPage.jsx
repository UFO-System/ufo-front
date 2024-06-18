import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { isMobile } from "react-device-detect";
import { useParams } from "react-router-dom";
import fork from "../../assets/silverware-fork-knife.png";
import monitor from "../../assets/monitor.png";
import UserOrderFoods from "./UserOrderFoods/UserOrderFoods";
const UserPage = () => {
  const { group, tableid } = useParams();
  const navigate = useNavigate();

  const handleKitchenPageClick = () => {
    navigate("/UserKitchenPage");
  };
  const salesItem = [
    { time: "10:20", menu: "김치찜", price: 10000 },
    { time: "09:21", menu: "계란찜", price: 19900 },
    { time: "13:22", menu: "수육", price: 14950 },
  ];
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
          // maxHeight: "50vh",
          height: "auto",
        }}
      >
        <Button
          variant="contained"
          onClick={() => navigate(`/${group}/${tableid}/UserOrderPage1`)}
          sx={{
            width: "100%",
            height: isMobile ? "20vh" : "20vh",
          }}
        >
          <Box
            src={fork}
            component="img"
            style={{
              width: "43px",
              height: "43px",
              marginRight: "8px",
            }}
          />
          <Typography variant="h3">주문하기</Typography>
        </Button>

        <Button
          variant="contained"
          onClick={handleKitchenPageClick}
          sx={{
            width: "100%",
            height: isMobile ? "20vh" : "20vh",
          }}
        >
          <Box
            src={monitor}
            component="img"
            style={{
              width: "43px",
              height: "43px",
              marginRight: "8px",
            }}
          />
          <Typography variant="h3">오더 모니터링</Typography>
        </Button>
        <UserOrderFoods data={salesItem} />
      </Box>
    </div>
  );
};

export default UserPage;
