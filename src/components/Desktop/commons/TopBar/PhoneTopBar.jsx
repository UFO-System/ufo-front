import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { AppBar, Divider } from "@mui/material";
import "./css/TopBar.css";
import { useContext, useState } from "react";
import UFO from "../../../../assets/UFO.png";
import { UserInfoContext } from "../../../../contexts/UserInfoContext";
const menuLists = ["매출관리", "마이페이지", "로그아웃"];
const pages = ["SalesManage", "MyPage", ""];
function PhoneTopBar({ children }) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [, , removeCookie] = useCookies(["id"]);
  const navigate = useNavigate();
  const { group } = useContext(UserInfoContext);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleLogout = () => {
    // 전달된 쿠키 삭제
    removeCookie("user"); // 쿠키를 삭제
    navigate("/");
  };
  // 텍스트가 10자를 넘으면 말줄임표로 자르는 함수
  const truncateText = (text, maxLength) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl" sx={{ margin: "0" }}>
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <Box
                sx={{
                  display: { xs: "flex", md: "none" },
                  alignItems: "center",
                  mr: 1,
                  cursor: "pointer",
                }}
                onClick={() => navigate("/Phone")}
              >
                <img
                  src={UFO}
                  style={{
                    width: "43px",
                    height: "43px",
                    marginRight: "8px",
                  }}
                />
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  sx={{
                    mr: 2,
                    display: { xs: "flex", md: "none" },
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
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                mr: 1,
                cursor: "pointer",
              }}
              onClick={() => navigate("/Phone")}
            >
              <img
                src={UFO}
                style={{
                  width: "43px",
                  height: "43px",
                  marginRight: "8px",
                }}
              />
              <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                  mr: 2,
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

            <Box
              sx={{
                float: "right",
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
            <Box sx={{ display: { xs: "none", md: "flex" }, ml: "auto" }}>
              {menuLists.map((menuList, idx) => (
                <>
                  <Button
                    key={menuList + "a"}
                    onClick={() => {
                      handleCloseNavMenu();
                      if (idx == 2) {
                        handleLogout();
                      } else {
                        navigate("/" + pages[idx]);
                      }
                    }}
                    sx={{
                      my: 2,
                      color: "white",
                      display: "block",
                      marginLeft: "20px",
                    }}
                  >
                    {menuList}
                  </Button>
                  <Divider orientation="vertical" sx={{ display: "inline" }} />
                </>
              ))}
            </Box>
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                float: "right",
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {menuLists.map((menuList, idx) => (
                  <MenuItem
                    key={menuList}
                    onClick={() => {
                      handleCloseNavMenu();
                      navigate("/" + pages[idx]);
                    }}
                  >
                    <Typography textAlign="center">{menuList}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box
        sx={{ paddingTop: "20px", paddingLeft: "20px", paddingRight: "20px" }}
      >
        {children}
      </Box>
    </>
  );
}
export default PhoneTopBar;
