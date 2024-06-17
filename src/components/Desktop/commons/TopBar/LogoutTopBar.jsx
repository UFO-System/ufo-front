import { useNavigate, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { AppBar } from "@mui/material";
import "./css/TopBar.css";
import UFO from "../../../../assets/UFO.png";

function LogoutTopBar({ children, isLogin }) {
  const navigate = useNavigate();
  const { group, tableid } = useParams();
  // 텍스트가 10자를 넘으면 말줄임표로 자르는 함수
  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.substring(0, maxLength) + ".." : text;
  };

  return (
    <div className="notLoginTopBar">
      <AppBar position="static">
        <Container maxWidth="xl" sx={{ margin: "0", paddingRight: "0" }}>
          <Toolbar disableGutters>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={() => (isLogin ? navigate("/Phone") : "")}
              >
                <Box
                  component="img"
                  src={UFO}
                  sx={{
                    width: { xs: "30px", md: "43px" },
                    height: { xs: "30px", md: "43px" },
                    marginRight: "8px",
                  }}
                />
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  sx={{
                    mr: 2,
                    display: "flex",
                    fontFamily: "monospace",
                    fontWeight: 700,
                    fontSize: { xs: "15px", md: "18px" },
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  UFO
                </Typography>
              </Box>
            </Box>

            {group !== undefined && (
              <Box
                sx={{
                  position: "absolute",
                  right: "0",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    my: 3,
                    marginRight: "10px",
                    display: { xs: "inline-block", sm: "none" },
                    fontFamily: "monospace",
                    fontWeight: 600,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                    fontSize: "12px",
                  }}
                >
                  {truncateText(group, 7)}
                  <br />
                  <Box sx={{ float: "right", mt: "5px", mb: "-5px" }}>
                    {tableid}번 테이블
                  </Box>
                </Typography>
                <Typography
                  sx={{
                    my: 3,
                    marginRight: "10px",
                    display: { xs: "none", sm: "inline-block" },
                    fontFamily: "monospace",
                    fontWeight: 600,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                    fontSize: "12px",
                  }}
                >
                  {group}
                </Typography>
              </Box>
            )}
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

export default LogoutTopBar;
