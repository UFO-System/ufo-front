import React, { useState, useContext, useRef } from "react";
import { Button, TextField, Box, Typography } from "@mui/material";
import QRCode from "react-qr-code";
import { UserInfoContext } from "../../../contexts/UserInfoContext";
import JSZip from "jszip";
import { saveAs } from "file-saver";

export default function QRManage() {
  const [qrData, setQrData] = useState("");
  const [isGenerated, setIsGenerated] = useState(false);
  const [items, setItems] = useState([]);
  const { id, group } = useContext(UserInfoContext);
  const qrRefs = useRef([]);

  // 입력값이 변경될 때 호출되는 함수
  const handleInputChange = (value) => {
    setQrData(value);
    setIsGenerated(false);
  };

  // QR 코드를 생성하는 함수
  const generateQRCode = () => {
    if (qrData > 0) {
      const newItems = [];
      for (let i = 1; i <= qrData; i++) {
        newItems.push(`localhost:5173/${id}/${i}`);
      }
      setItems(newItems);
      setIsGenerated(true);
    }
  };

  // 모든 QR 코드를 ZIP 파일로 다운로드하는 함수
  const downloadQRCodes = async () => {
    const zip = new JSZip(); // JSZip 인스턴스를 생성합니다

    // 각 QR 코드 요소를 순회하면서 ZIP 파일에 추가합니다
    qrRefs.current.forEach((ref, index) => {
      if (ref) {
        const svg = ref.querySelector("svg").outerHTML; // QR 코드 SVG 요소를 문자열로 가져옵니다
        zip.file(`${group}_QR_table_${index + 1}.svg`, svg); // SVG 데이터를 ZIP 파일에 추가합니다
      }
    });

    // ZIP 파일을 생성하고 다운로드합니다
    zip.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, `${group}_테이블_QR.zip`); // 생성된 ZIP 파일을 다운로드합니다
    });
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="75vh"
      textAlign="center"
    >
      <Box mb={2}>
        <Typography variant="h4" fontWeight="bold">
          QR 생성기
        </Typography>
      </Box>
      <TextField
        type="number"
        value={qrData}
        placeholder="필요한 테이블 개수를 입력하세요"
        onChange={(e) => handleInputChange(e.target.value)}
        autoFocus
        margin="normal"
        sx={{ width: "300px" }}
        inputProps={{ min: 0 }}
      />
      <Button
        onClick={generateQRCode}
        disabled={qrData === ""}
        variant="contained"
        color="primary"
        sx={{ mt: 2, mb: 2 }}
        size="large"
      >
        생성하기
      </Button>
      {isGenerated && (
        <>
          <Button
            color="success"
            variant="contained"
            size="large"
            onClick={downloadQRCodes}
          >
            다운로드
          </Button>
          {items.map((item, index) => (
            <Box
              key={item}
              mt={4}
              ref={(el) => (qrRefs.current[index] = el)}
              sx={{ display: "none" }}
            >
              <QRCode value={item} />
            </Box>
          ))}
        </>
      )}
    </Box>
  );
}
