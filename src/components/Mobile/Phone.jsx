import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./css/Phone.css";
import fork from "../../assets/silverware-fork-knife.png";
import monitor from "../../assets/monitor.png";
const Phone = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const handleOrderPageClick = () => {
    navigate("/OrderPage1");
  };

  const handleKitchenPageClick = () => {
    navigate("/KitchenPage");
  };

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
          onClick={handleOrderPageClick}
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
          <Typography variant="h3" sx={{ fontSize: { xs: "40px" } }}>
            주문하기
          </Typography>
        </Button>
        <Button
          variant="contained"
          onClick={handleKitchenPageClick}
          sx={{
            width: "100%",
            height: isMobile ? "48vh" : "48vh",
          }}
        >
          <Box
            src={monitor}
            component="img"
            style={{
              display: "block",
              width: "43px",
              height: "43px",
              marginRight: "8px",
            }}
          />

          <Typography variant="h3" sx={{ fontSize: { xs: "40px" } }}>
            오더 모니터링
          </Typography>
        </Button>
      </Box>
    </div>
  );
};

export default Phone;
