import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70vw",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function SalesAlertModal({ modalState }) {
  const [open, setOpen] = React.useState(modalState);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h6" component="h2" color="red">
            * 안내 *
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            PC에서 상세조회가 가능합니다.
            <br />
            (입금자, 입금시간,금액 등) <br /> <br />
            <br />
            모바일에선 총 매출과 당일 매출만 볼 수 있습니다.
          </Typography>
          <br />
          <Button
            variant={"contained"}
            sx={{ left: "50%", transform: "translate(-50%,0)" }}
            onClick={() => handleClose()}
          >
            확인
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
