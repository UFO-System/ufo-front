import { Button, ButtonGroup, Typography } from "@mui/material";
import React from "react";

export default function OrderFoodIndicator({ size, state }) {
  return (
    <ButtonGroup variant="outlined" size={size}>
      <Button disabled sx={{ color: "black", background: "red" }}>
        <Typography sx={{ color: "black" }}>
          {size === "small" ? (
            <>
              대기
              <br />중
            </>
          ) : (
            <>대기중</>
          )}
        </Typography>
      </Button>
      <Button disabled sx={{ color: "black", background: "gray" }}>
        <Typography sx={{ color: "black" }}>
          {size === "small" ? (
            <>
              조리
              <br />중
            </>
          ) : (
            <>조리중</>
          )}
        </Typography>
      </Button>
      <Button disabled sx={{ color: "black", background: "gray" }}>
        <Typography sx={{ color: "black" }}>
          {size === "small" ? (
            <>
              조리
              <br />
              완료
            </>
          ) : (
            <>조리완료</>
          )}
        </Typography>
      </Button>
    </ButtonGroup>
  );
}
