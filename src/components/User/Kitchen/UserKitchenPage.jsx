import React from "react";
import data from "../../Mobile/Kitchen/data.json";
import UserOrderBoard from "./UserOrderBoard";

function UserKitchenPage() {
  return (
    <>
      <body className="kitchenBody">
      {Object.entries(data).map(([key, values]) => (
          <UserOrderBoard key={key} values={values} />
        ))}
      </body>
    </>
  );
}

export default UserKitchenPage;