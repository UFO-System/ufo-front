import {
  Box,
  Container,
  Divider,
  Paper,
  Typography,
  makeStyles,
} from "@mui/material";
import ReceiptPaper from "../ReceiptPaper";
import OrderFoodIndicator from "../commons/OrderFoodIndicator";

export default function DetailUserOrderFoods() {
  const salesItem = [
    { menu: "김치찜", num: 2, price: 10000 },
    { menu: "계란찜", num: 1, price: 19900 },
    { menu: "수육", num: 2, price: 14950 },
    { menu: "김치찜", num: 2, price: 10000 },
    { menu: "계란찜", num: 1, price: 19900 },
    { menu: "수육", num: 2, price: 14950 },
    { menu: "김치찜", num: 2, price: 10000 },
    { menu: "계란찜", num: 1, price: 19900 },
    { menu: "수육", num: 2, price: 14950 },
    { menu: "김치찜", num: 2, price: 10000 },
    { menu: "계란찜", num: 1, price: 19900 },
    { menu: "수육", num: 2, price: 14950 },
    { menu: "김치찜", num: 2, price: 10000 },
    { menu: "계란찜", num: 1, price: 19900 },
    { menu: "수육", num: 2, price: 14950 },
  ];

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <ReceiptPaper
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Box sx={{ width: "100%", flexGrow: 1 }}>
          <Typography variant="h5" gutterBottom>
            Order No.12
          </Typography>
          <Divider sx={{ width: "100%", marginBottom: "16px" }} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            {salesItem.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="body1">{item.menu}</Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <Typography variant="body1">X{item.num}</Typography>
                  <Typography variant="body1">{item.price}원</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            position: "absolute",
            bottom: "30px",
            width: "78vw",
            maxWidth: "600px",
          }}
        >
          <Divider sx={{ width: "100%" }} />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              marginTop: "10px",
            }}
          >
            <OrderFoodIndicator size="small" />
            <Box sx={{ margin: "auto" }}>
              <Typography>총: 58000원</Typography>
            </Box>
          </Box>
        </Box>
      </ReceiptPaper>
    </Container>
  );
}
