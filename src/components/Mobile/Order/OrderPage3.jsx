import React from "react";
import AppBar from "@mui/material/AppBar";
import { useState } from "react";
import OrderPage1 from "./OrderPage1";
import OrderPage2 from "./OrderPage2";
import Container from "@mui/material/Container";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import "./css/OrderPage.css";

const OrderPage3 = () => {
  const location = useLocation();
  console.log(location);
  const total = location.state.total; // 총가격
  const name = location.state.name; // 로고 이름
  const value1 = location.state.value1; // 입금자 명
  //  const value2 = location.state.value2 // 테이블 넘버
  const [orderNumber, setOrderNumber] = useState(0);
  const { group, tableid } = useParams();
  const number = " 농협 12345678900000";
  const navigate = useNavigate();
  // 총 가격: {total} 원  입금자: {value1}
  return (
    <div className="app">
      {/* <AppBar position="static">
      <h4 className='name'>{name}</h4>
    </AppBar> */}
      <div className="textdiv">
        <h4>주문이 완료되었습니다.</h4>
        <p>
          <b>아래 계좌로 이체하시면 주문이 수락됩니다.</b>
        </p>
        <p>&nbsp;</p>
        <p>
          <b>총 가격: {total} 원</b>
        </p>
        <p>
          <b>입금자: {value1}</b>
        </p>
        <p>&nbsp;</p>
        <p>
          <b>{number}</b>
        </p>
        <p>&nbsp;</p>
        <p>
          <b>주문 번호를 통해 부엌화면에서 주문 순서를 확인하실 수 있습니다.</b>
        </p>
        <p>&nbsp;</p>
        <p>
          <b>주문 번호: {orderNumber}번</b>
        </p>
      </div>

      <div style={{ position: "fixed", bottom: 0, width: "100%" }}>
        <AppBar
          position="static"
          style={{ height: "80px", paddingTop: "15px", display: "flex" }}
        >
          <center>
            <Button
              className="orderBt"
              style={{ color: "white", boxShadow: "1px 1px 5px black" }}
              onClick={() => {
                navigate(group === null ? "/Phone" : `/${group}/${tableid}`);
              }}
            >
              주문완료
            </Button>
          </center>
        </AppBar>
      </div>
    </div>
  );
};

export default OrderPage3;
