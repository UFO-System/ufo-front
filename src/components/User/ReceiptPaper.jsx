import { Container, Paper } from "@mui/material";

export default function ReceiptPaper({ children }) {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: "80vw",
          maxWidth: "600px",
          minHeight: "50vh",
          position: "relative",
          backgroundColor: "white",
          padding: "20px",
          paddingBottom: "120px",
          marginBottom: "20px",
          "&::before, &::after": {
            content: '""',
            position: "absolute",
            left: 0,
            right: 0,
            height: "20px",
            backgroundImage:
              "linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%, #ccc), linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%, #ccc)",
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 10px 10px",
          },
          "&::before": {
            top: "-10px",
          },
          "&::after": {
            bottom: "-10px",
            transform: "rotate(180deg)",
          },
        }}
      >
        {children}
      </Paper>
    </Container>
  );
}
