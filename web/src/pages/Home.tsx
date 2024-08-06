import React from "react";
import ListWrap from "../components/CustomList";
import DataDisplay from "../components/CustomDataDisplay";

export default function LoginPage() {
  return (
    <div
      id="background-container"
      className="grid grid-flow-col relative bg-forest bg-center bg-cover bg-no-repeat min-h-screen min-w-screen place-items-center"
    >
      <DataDisplay />
      <ListWrap />
      <ListWrap />
    </div>
  );
}
