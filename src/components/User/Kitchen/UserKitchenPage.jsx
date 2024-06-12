import React from "react";
import data from "../../Mobile/Kitchen/data.json";
import UserOrderBoard from "./UserOrderBoard";

function UserKitchenPage() {
  return (
    <div className="kitchenBody">
      {Object.entries(data).map(([key, values], index) => (
        <UserOrderBoard key={key} values={values} index={index + 1} />
      ))}
    </div>
  );
}

export default UserKitchenPage;
