import React from "react";
import "./css/KitchenPage.css";
import OrderBoard from "./OrderBoard";
import Header from "./Header";
import data from "./data.json";
import LogoutTopBar from "../../Desktop/commons/TopBar/LogoutTopBar";

function KitchenPage() {
  return (
    <>
      <LogoutTopBar />
      <Header />
      <body className="kitchenBody">
        {Object.entries(data).map(([key, values]) => (
          <OrderBoard key={key} tableNo ={key} values={values} />
        ))}
      </body>
    </>
  );
}

export default KitchenPage;