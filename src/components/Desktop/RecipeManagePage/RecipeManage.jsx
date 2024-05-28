import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
  TableSortLabel,
  TextField,
} from "@mui/material";

const RecipeManage = () => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat("ko-KR").format(price) + "원";
  };

  const [data, setData] = useState([
    {
      name: "어묵탕",
      price: 5000,
      image: "어묵탕 이미지 경로",
      addedDate: new Date(),
    },
    {
      name: "닭발",
      price: 7000,
      image: "닭발 이미지 경로",
      addedDate: new Date(),
    },
    {
      name: "계란찜",
      price: 3000,
      image: "계란찜 이미지 경로",
      addedDate: new Date(),
    },
    {
      name: "수육",
      price: 12000,
      image: "수육 이미지 경로",
      addedDate: new Date(),
    },
    {
      name: "나베",
      price: 15000,
      image: "나베 이미지 경로",
      addedDate: new Date(),
    },
    {
      name: "파전",
      price: 10000,
      image: "파전 이미지 경로",
      addedDate: new Date(),
    },
  ]);

  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("");

  const handleRequestSort = (property) => {
    let newOrderBy = property;
    let newOrder = "desc";

    if (orderBy === property && order === "desc") {
      newOrder = "asc";
    }

    setOrder(newOrder);
    setOrderBy(newOrderBy);
  };

  const descendingComparator = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) return -1;
    if (b[orderBy] > a[orderBy]) return 1;
    return 0;
  };

  const stableSort = (array, comparator) => {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  };

  const getComparator = (order, orderBy) => {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  };

  const menus = stableSort(data, getComparator(order, orderBy));

  const [newMenu, setNewMenu] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newImage, setNewImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleDelete = (name) => {
    const confirmDelete = window.confirm("정말로 삭제하시겠습니까?");
    if (confirmDelete) {
      const updatedMenus = data.filter((menu) => menu.name !== name);
      setData(updatedMenus);
    }
  };

  const handleAddMenu = () => {
    if (
      newMenu.trim() === "" ||
      newPrice.trim() === "" ||
      newImage === null
    ) {
      alert("모든 필드를 입력하세요.");
      return;
    }

    const isDuplicateMenu = menus.some((menu) => menu.name === newMenu);
    if (isDuplicateMenu) {
      alert("이미 존재하는 메뉴입니다.");
      return;
    }

    const updatedMenu = {
      name: newMenu,
      price: parseInt(newPrice),
      image: URL.createObjectURL(newImage),
      addedDate: new Date(),
    };

    const updatedMenus = [...data, updatedMenu];

    setData(updatedMenus);

    setNewMenu("");
    setNewPrice("");
    setNewImage(null);
    setImagePreview(null);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setNewImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <div style={{ width: "50%", height: "80vh", overflow: "auto" }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  colSpan={3}
                  align="center"
                  sx={{ backgroundColor: "#002884", color: "white" }}
                >
                  현재 메뉴
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === "name"}
                    direction={orderBy === "name" ? order : "asc"}
                    onClick={() => handleRequestSort("name")}
                  >
                    <Typography variant="h7" gutterBottom>
                      메뉴
                    </Typography>
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === "price"}
                    direction={orderBy === "price" ? order : "asc"}
                    onClick={() => handleRequestSort("price")}
                  >
                    <Typography variant="h7" gutterBottom>
                      가격
                    </Typography>
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <Typography variant="h7" gutterBottom>
                    비고
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {menus.map((menu) => (
                <TableRow key={menu.name}>
                  <TableCell>
                    <Typography variant="h6" gutterBottom>
                      {menu.name}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6" gutterBottom>
                      {formatPrice(menu.price)}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => handleDelete(menu.name)}
                      variant="contained"
                      color="error"
                    >
                      x
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <div style={{ width: "40%", margin: "50px" }}>
        <Paper elevation={3} style={{ padding: "20px" }}>
          <Typography variant="h5" gutterBottom>
            추가할 메뉴
          </Typography>
          <TextField
            label="메뉴명"
            value={newMenu}
            onChange={(e) => setNewMenu(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="가격"
            value={newPrice}
            onChange={(e) => setNewPrice(e.target.value)}
            fullWidth
            margin="normal"
          />
          <input
            accept="image/*"
            type="file"
            onChange={handleImageChange}
            style={{ marginTop: "20px" }}
          />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              style={{ marginTop: "20px", maxWidth: "100%" }}
            />
          )}
          <Button
            onClick={handleAddMenu}
            variant="contained"
            color="primary"
            style={{ marginTop: "20px" }}
          >
            추가하기
          </Button>
        </Paper>
      </div>
    </div>
  );
};

export default RecipeManage;
