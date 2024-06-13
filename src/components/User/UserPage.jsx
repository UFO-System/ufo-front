import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { isMobile } from "react-device-detect";
import { useParams } from "react-router-dom";
import fork from "../../assets/silverware-fork-knife.png";
import monitor from "../../assets/monitor.png";
const UserPage = () => {
  const { group, tableid } = useParams();

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
          //   onClick={}
          sx={{
            width: "100%",
            height: isMobile ? "48vh" : "48vh",
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
      </Box>
    </div>
  );
};

export default UserPage;
