import { Button } from "@mui/material";
import React, { useState } from "react";
import Loading from "../../../commons/Loading/Loading";
export default function CheckIdDuplicate({ disabled }) {
  return (
    <Button variant="contained" size="small" disabled={disabled}>
      중복 확인
    </Button>
  );
}
