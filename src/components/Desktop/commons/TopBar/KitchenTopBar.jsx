import { useNavigate, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { AppBar } from "@mui/material";
import "./css/TopBar.css";
import UFO from "../../../../assets/UFO.png";

function KitchenTopBar({ children, isLogin }) {
  const navigate = useNavigate();
  const { group } = useParams();
  return (
    <div className="notLoginTopBar">
      <AppBar position="static">
        <Container maxWidth="xl" sx={{ margin: "0" }}>
          <Toolbar disableGutters>
            <Box
              sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mr: 1,
                  cursor: "pointer",
                }}
                onClick={() => (isLogin ? navigate("/Phone") : "")}
              >
                <img
                  src={UFO}
                  alt="UFO"
                  style={{ width: "43px", height: "43px", marginRight: "8px" }}
                />
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  sx={{
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  UFO
                </Typography>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box
        sx={{ paddingTop: "20px", paddingLeft: "20px", paddingRight: "20px" }}
      >
        {children}
      </Box>
    </div>
  );
}

export default KitchenTopBar;
