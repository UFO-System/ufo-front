import { Backdrop, Box, CircularProgress } from "@mui/material";
import React from "react";
import UFO from "../../../assets/UFO.png";

export default function Loading({ isLoading }) {
  return (
    <Backdrop
      sx={{
        color: "#fff",
        zIndex: (theme) => theme.zIndex.drawer + 1,
        display: "flex",
        flexDirection: "column", // 세로 방향으로 아이템을 나열
        alignItems: "center", // 가로 중앙 정렬
        justifyContent: "center", // 세로 중앙 정렬
        height: "100%", // 전체 높이를 차지하도록 설정
      }}
      open={isLoading}
    >
      <img
        src={UFO}
        alt="UFO"
        style={{ width: "250px", height: "250px", marginBottom: "50px" }}
      />
      <CircularProgress
        size={80}
        color={"inherit"}
        sx={{ marginBottom: "200px" }}
      />
    </Backdrop>
  );
}
