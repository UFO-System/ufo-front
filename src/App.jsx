import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Desktop/Login/Login";
import MainPage from "./components/MainPage";
import Register from "./components/Desktop/Register/Register";
import KitchenPage from "./components/Mobile/Kitchen/KitchenPage";
import OrderPage1 from "./components/Mobile/Order/OrderPage1";
import OrderPage2 from "./components/Mobile/Order/OrderPage2";
import OrderPage3 from "./components/Mobile/Order/OrderPage3";
import MyPage from "./components/Desktop/MyPage/MyPage";
import RecipeManage from "./components/Desktop/RecipeManagePage/RecipeManage";
import OrderManage from "./components/Desktop/OrderManagePage/OrderManage";
import SalesManage from "./components/Desktop/SalesManagePage/SalesManage";
import Phone from "./components/Mobile/Phone";
import LogoutTopBar from "./components/Desktop/commons/TopBar/LogoutTopBar";
import TopBar from "./components/Desktop/commons/TopBar/TopBar";
import { UserInfoProvider } from "./contexts/UserInfoContext";
import PhoneTopBar from "./components/Desktop/commons/TopBar/PhoneTopBar";
import UserPage from "./components/User/UserPage";
import { isDesktop, isIOS, isMobile, isTablet } from "react-device-detect";
import QRManage from "./components/Desktop/QRManagePage/QRManage";
import KitchenTopBar from "./components/Desktop/commons/TopBar/KitchenTopBar";
function App() {
  return (
    <Router>
      <Routes>
        {/* 로그인 화면 */}
        <Route
          path="/"
          element={
            <UserInfoProvider>
              <LogoutTopBar>
                <Login />
              </LogoutTopBar>
            </UserInfoProvider>
          }
        />
        {/* 회원 가입 화면 */}
        <Route
          path="/Register"
          element={
            <LogoutTopBar>
              <Register />
            </LogoutTopBar>
          }
        />
        {/* 로그인 후 첫화면 */}
        <Route
          path="/Main"
          element={
            <UserInfoProvider>
              <TopBar isDesktop={true}>
                <MainPage />
              </TopBar>
            </UserInfoProvider>
          }
        />
        {/* 주문관리 */}
        <Route
          path="/OrderManage"
          element={
            <UserInfoProvider>
              <TopBar>
                <OrderManage />
              </TopBar>
            </UserInfoProvider>
          }
        />
        {/* 메뉴 관리 */}
        <Route
          path="/RecipeManage"
          element={
            <UserInfoProvider>
              <TopBar>
                <RecipeManage />
              </TopBar>
            </UserInfoProvider>
          }
        />
        {/* 매출 관리 */}
        <Route
          path="/SalesManage"
          element={
            <UserInfoProvider>
              {isMobile || isTablet ? (
                <>
                  <PhoneTopBar />
                  <SalesManage />
                </>
              ) : (
                <>
                  <TopBar />
                  <SalesManage />
                </>
              )}
            </UserInfoProvider>
          }
        />
        {/* QR 생성 */}
        <Route
          path="/QRManage"
          element={
            <UserInfoProvider>
              <TopBar>
                <QRManage />
              </TopBar>
            </UserInfoProvider>
          }
        />
        {/* 마이페이지 (정보 수정용) */}
        <Route
          path="/MyPage"
          element={
            <UserInfoProvider>
              {isMobile || isTablet ? (
                <>
                  <PhoneTopBar />
                  <MyPage />
                </>
              ) : (
                <>
                  <TopBar />
                  <MyPage />
                </>
              )}
            </UserInfoProvider>
          }
        />

        {/* 폰화면 */}
        <Route
          path="/Phone"
          element={
            <UserInfoProvider>
              <PhoneTopBar />
              <Phone />
            </UserInfoProvider>
          }
        />
        {/* 부엌에서 볼 화면 */}
        <Route
          path="/KitchenPage"
          element={
            <UserInfoProvider>
              <KitchenTopBar />
              <KitchenPage />
            </UserInfoProvider>
          }
        />
        {/* 주문 화면 */}
        <Route
          path="/OrderPage1"
          element={
            <UserInfoProvider>
              <PhoneTopBar />
              <OrderPage1 />
            </UserInfoProvider>
          }
        />
        <Route
          path="/OrderPage2"
          element={
            <UserInfoProvider>
              <PhoneTopBar />
              <OrderPage2 />
            </UserInfoProvider>
          }
        />
        <Route
          path="/OrderPage3"
          element={
            <UserInfoProvider>
              <PhoneTopBar />
              <OrderPage3 />
            </UserInfoProvider>
          }
        />
        <Route
          path="/:group/:tableid"
          element={
            <>
              <LogoutTopBar />
              <UserPage />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
