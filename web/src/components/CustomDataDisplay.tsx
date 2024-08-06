import { ErrorInfo, FC, useContext, useState } from "react";
import { PiFinnTheHuman } from "react-icons/pi";
import { BiLogOut, BiEdit, BiSave } from "react-icons/bi";

import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import { validateCod, validateName } from "../utils/others";
import { updateProfile } from "../service/service";
import { profile } from "../utils/interfaces";

interface DataDisplayProps {
  itemWrap?: FC;
}

export default function DataDisplay({}: DataDisplayProps) {
  const { profile, update, logout } = useContext(AuthContext);

  const [displayName, setDisplayName] = useState(profile.name);
  const [displayCod, setDisplayCod] = useState(profile.cod);
  const [editMode, setEditMode] = useState(false);

  //mok // const _profile = { cod: "placeholder COD", nume: "placeholder Nume" };

  async function handleSave() {
    setEditMode(!editMode);
    try {
      validateCod(displayCod);
      validateName(displayName);
      const updatedProfile = await updateProfile({
        cod: profile.cod,
        profile: {
          cod: displayCod,
          name: displayName,
        },
      });
      await update(updatedProfile);
      setDisplayCod(updatedProfile.cod);
      setDisplayName(updatedProfile.name);
    } catch (error: any) {
      toast.error(error instanceof Error ? error.message : "Unknown error");
    }
  }
  return (
    <div
      id="componentWrap"
      className="flex flex-col gap-6 bg-custom-dark h-[70%] rounded-3xl p-6"
    >
      <div id="detailsWrap" className="grid grid-flow-col w-full ">
        <PiFinnTheHuman className=" w-full h-full justify-evenly" />
        <div className="grid place-items-end gap-4 ">
          <CustomInput
            labelText="NUME"
            initialValue={displayName}
            textSize="text-xl"
            onInputChange={setDisplayName}
            labelStyle="font-bold"
            disabled={!editMode}
          />
          <CustomInput
            labelText="  COD"
            initialValue={displayCod}
            textSize="text-xl"
            onInputChange={setDisplayCod}
            labelStyle="font-bold"
            disabled={!editMode}
          />
          <div className="flex flex-row bg-green-500 h-full w-full justify-end place-items-center">
            {!editMode ? (
              <CustomButton
                onClick={() => setEditMode(!editMode)}
                buttonIcon={<BiEdit />}
                iconProps={{ size: 64 }}
              />
            ) : (
              <CustomButton
                onClick={handleSave}
                buttonIcon={<BiSave />}
                iconProps={{ size: 64 }}
              />
            )}
            <CustomButton
              onClick={logout}
              buttonIcon={<BiLogOut />}
              iconProps={{ size: 64 }}
            />
          </div>
        </div>
      </div>
      <div className="bg-red-500  h-full w-full"> bbbb</div>
    </div>
  );
}
