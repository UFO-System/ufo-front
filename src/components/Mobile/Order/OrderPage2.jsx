import React from 'react'
import AppBar from '@mui/material/AppBar';
import OrderPage1 from './OrderPage1';
import Container from '@mui/material/Container';
import {useLocation, useNavigate} from 'react-router-dom'
import Button from '@mui/material/Button';
import "./css/OrderPage.css"

const OrderPage2 = () => {
  
  const location = useLocation();
  console.log(location);
  const total= location.state.total; // 총가격
  const name = location.state.name // 로고 이름
  const value1 = location.state.value1 // 입금자 명
  //const value2 = location.state.value2 // 테이블 넘버

  const navigate =useNavigate();
  return (
    
    <div className='app'>
      <AppBar position="static">
      <h4 className='name'>{name}</h4>
      </AppBar>
      <div className='textdiv'>
        <p><b>입금자 명: {value1}</b></p>
        {/* <p><b>테이블 넘버: {value2}</b></p> */}
        <p><b>총 가격: {total} 원</b></p>
        <p>&nbsp;</p>
        <p><b>입력하신 입금자명과 입금자가 <br/>동일해야 입금내역을 확인할 수 있습니다.</b></p>
        <p>&nbsp;</p>
        <p><b>입금자 명을 수정하시거나 <br/>메뉴를 변경하려면 주문취소를 눌러주세요.</b></p>
        <p>&nbsp;</p>
        <p><b>이대로 주문을 하시려면 주문하기를 눌러주세요.</b></p>
      </div>


      <div style={{position: "fixed", bottom: 0 ,width: "100%"}}>
      <AppBar position="static" style={{height:'80px', paddingTop:'15px', display:'flex'}}>
      <center>
      <Button className='orderBt' style={{color: 'white', boxShadow:'1px 1px 5px black', background : 'red', margin:'5px'}}
      onClick={()=>{
        if(window.confirm('주문을 취소 하시겠습니까?')){
          navigate(-1)
        }
        else{
          //아니요
        }
      }}>주문취소</Button>

      <Button className='orderBt' style={{color: 'white', boxShadow:'1px 1px 5px black'}}
      onClick={()=>{
        if(window.confirm('주문을 하시겠습니까?')){
          navigate('/OrderPage3', {state:{total: total, value1: value1, name: name}})
        }
        else{
          //아니요
      }}}>주문하기</Button>
      </center>
      </AppBar>
      </div>
    </div>
    
  )
}

export default OrderPage2

