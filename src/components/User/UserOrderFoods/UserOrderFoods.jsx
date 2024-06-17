import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import OrderFoodIndicator from "../commons/OrderFoodIndicator";

const salesItem = [
  { time: "10:20", menu: "김치찜", price: 10000 },
  { time: "09:21", menu: "계란찜", price: 19900 },
  { time: "13:22", menu: "수육", price: 14950 },
];
export default function UserOrderMenu({ data }) {
  const navigate = useNavigate();
  return (
    <TableContainer
      component={Paper}
      sx={{ height: "auto" }}
      onClick={() => navigate("DetailUserOrderFoods")}
    >
      <Table>
        <TableHead>
          <TableRow sx={{ height: "auto" }}>
            <TableCell
              sx={{
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              <Typography>1번 테이블</Typography>
            </TableCell>
            <TableCell
              sx={{
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              <OrderFoodIndicator />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ height: "auto" }}>
          <TableCell sx={{ textAlign: "center" }} align="left">
            <Typography variant="subtitle1">1301번</Typography>
          </TableCell>
          <TableCell sx={{ textAlign: "center" }}>
            {salesItem
              .filter((item, i) => i <= 2)
              .map((item, i) => (
                <>
                  <Typography variant="subtitle1" align="center">
                    {item.menu}
                  </Typography>
                  <br />
                </>
              ))}
            <div style={{ display: "flex", float: "right" }}>
              <Typography variant="subtitle1">
                {" "}
                &nbsp;&nbsp; &gt;&gt;상세보기
              </Typography>
            </div>
          </TableCell>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
