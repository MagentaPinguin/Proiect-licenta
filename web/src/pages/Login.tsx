import React, { useContext, useState } from "react";
import CustomInput from "../components/CustomInput";
import { validateCod } from "../utils/others";
import { auth } from "../service/service";
import toast from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";

export default function LoginPage() {
  const [cod, setCode] = useState("");
  const [isLoading, setLoading] = useState(false);
  const { login } = useContext(AuthContext);
  const handleLogin = async () => {
    setLoading(true);
    try {
      validateCod(cod);
      const result = await auth(cod);
      if (result.auth) {
        login(result.profile);
      } else throw new Error(result.message);
    } catch (err) {
      if (err instanceof Error) toast.error(err.message);
      else toast.error("An unknown error occurred");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div
      id="background-container"
      className="flex flex-row relative bg-forest bg-center bg-cover bg-no-repeat  min-h-screen min-w-screen"
    >
      <div className="flex flex-row m-auto items-center justify-center bg-shield bg-center bg-cover bg-no-repeat min-w-[500px] min-h-[600px] max-w-[500px] max-h-[600px] ">
        <div className="flex flex-col gap-2 items-center justify-center">
          <CustomInput
            onInputChange={setCode}
            labelText="COD"
            textSize="text-2xl"
          />
          {isLoading ? null : null}
          <button
            className="bg-custom-dark rounded-full p-3 text-2xl place-self-end"
            onClick={() => {
              handleLogin();
            }}
          >
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
}
