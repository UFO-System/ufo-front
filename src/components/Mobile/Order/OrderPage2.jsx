import React from 'react'
import AppBar from '@mui/material/AppBar';
import OrderPage1 from './OrderPage1';
import Container from '@mui/material/Container';
import {useLocation, useNavigate} from 'react-router-dom'
import Button from '@mui/material/Button';
import "./OrderPage.css"

const OrderPage2 = () => {
  
  const location = useLocation();
  console.log(location);
  const total= location.state.total;
  const name = location.state.name
  const value = location.state.value

  const number = ' 은행 1234567890'
  const navigate =useNavigate();
  return (
    
    <div className='app'>
      <AppBar position="static">
      <h4 className='name'>{name}</h4>
      </AppBar>
      <div className='menu'>
        <p> 총 가격: {total} 원</p>
        <p> 계좌번호: {number}</p>
        <p> 테이블 넘버: {value}</p>
      </div>
      <div style={{position: "fixed", bottom: 0 ,width: "100%"}}>
      <AppBar position="static" 
      style={{height:'80px', paddingTop:'15px', display:'flex'}}>
      <center>
      <Button className='orderBt' 
      style={{color: 'white', boxShadow:'1px 1px 5px black'}}
      onClick={()=>{navigate(-1)}}>
      뒤로</Button>
      </center>
      </AppBar>
      </div>
    </div>
    
  )
}

export default OrderPage2

