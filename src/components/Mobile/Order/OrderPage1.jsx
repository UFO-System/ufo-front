import React, { useState } from "react";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Input from "@mui/material/Input";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { useNavigate } from "react-router-dom";
import "./css/OrderPage.css";
import menu1 from  "./css/menu1.jpg"
import menu2 from  "./css/menu2.jpg"
import menu3 from  "./css/menu3.jpg"
const OrderPage1 = () => {
  // 매장 이름
  const name = "UFO";

  // 메뉴
  const [menus, setMenus] = useState([
    { id: 1, name: "닭발", count: 0, price: 8000, image: menu1 },
    { id: 2, name: "어묵탕", count: 0, price: 7000, image: menu2 },
    { id: 3, name: "보쌈", count: 0, price: 12000, image: menu3 },
  ]);

  // 메뉴 수량 더하기
  const handleIncrease = (index) => {
    const newMenus = [...menus];
    newMenus[index].count += 1;
    setMenus(newMenus);
  };

  // 메뉴 수량 빼기
  const handleDecrease = (index) => {
    const newMenus = [...menus];
    if (newMenus[index].count > 0) {
      newMenus[index].count -= 1;
      setMenus(newMenus);
    }
  };

  // 페이지 전환
  const navigate = useNavigate();

  // 입금자 이름 경고창
  const [value1, setValue1] = useState("");
  const [showWarning1, setShowWarning1] = useState(false);

  const handleChange1 = (e) => {
    const inputValue1 = e.target.value;
    setValue1(inputValue1);
    setShowWarning1(inputValue1 === "");
  };

  // 총 수량과 총 금액 계산
  const totalCount = menus.reduce((acc, menu) => acc + menu.count, 0);
  const totalPrice = menus.reduce(
    (acc, menu) => acc + menu.price * menu.count,
    0
  );

  
  return (
    <div className='app'>
      <Input 
        className='input'
        placeholder="입금자 이름을 입력하세요."
        type="text"
        value={value1}
        onChange={handleChange1}
      />
      {showWarning1 && (
        <p style={{ color: "red" }}>입금자 이름을 입력해주세요.</p>
      )}
      <hr></hr>
      
      {menus.map((menu, index) => (
        <div className="menu" key={menu.id} style={{alignItems: 'center' }}>
          <div style={{ marginLeft: "-10px" }}>
              <p>
              <Card sx={{ maxWidth: 100, maxHeight: 100 }} style={{display:"inline-block"}}>
              <CardMedia
              component="img"
              height="140"
              image={menu.image}
              alt={menu.name}
              />
              </Card>
              <div style={{display:"inline-block", marginLeft:"10px"}}>
                  <spen><b>{menu.name}</b><br/>{menu.price}원  {menu.count}개 </spen>
              </div>
              <Button
                className="btn"
                variant="contained"
                onClick={() => handleDecrease(index)}
                style={{ background: "red", float: "right"}}
              >
                {" "}
                -{" "}
              </Button>
              <Button
                className="btn"
                variant="contained"
                onClick={() => handleIncrease(index)}
              >
                {" "}
                +{" "}
              </Button>
            </p>
          </div>
        </div>
      ))}

      <div style={{ position: "fixed", bottom: 0, width: "100%" }}>
        <AppBar
          position="static"
          style={{ height: "130px", display: "flex" }}
        >
          <div className="bottom" >
            <p style={{margin:"20px"}}>
              총 수량: {totalCount}개 | 총 금액: {totalPrice}원 
            </p>
          </div>
          <center>
            <Button
              className="orderBt"
              onClick={() => {
                if (value1 === "") {
                  alert("입금자 이름을 입력해주세요");
                } else {
                  navigate(
                    "/OrderPage2",
                    {
                      state: {
                        total: totalPrice,
                        name: name,
                        value1: value1,
                      },
                    }
                  );
                }
              }}
              style={{ color: "white", boxShadow: "1px 1px 5px black" }}
            >
              주문하기
            </Button>
          </center>
        </AppBar>
      </div>
    </div>
  );
};

export default OrderPage1;
