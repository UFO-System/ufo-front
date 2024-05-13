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
        {data.table1.map((exams) => (
          <OrderBoard order_id={exams} />
        ))}
      </body>
    </>
  );
}

export default KitchenPage;
