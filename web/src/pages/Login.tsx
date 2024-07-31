import React from "react";
import CustomInput from "../components/customField";

function LoginComponent() {
  return (
    <div className="flex flex-row m-auto items-center justify-center bg-shield bg-center bg-cover bg-no-repeat  w-[500px] h-[600px] ">
      <div className="flex flex-col gap-2 items-center justify-center">
        <CustomInput
          onInputChange={() => {}}
          labelText="COD"
          textSize="text-2xl"
        />
        <button className="bg-custom-dark rounded-full p-3 text-2xl place-self-end">
          LOGIN
        </button>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <div
      id="background-container"
      className="flex flex-row relative bg-forest bg-center bg-cover bg-no-repeat h-screen w-screen"
    >
      <LoginComponent />
    </div>
  );
}
