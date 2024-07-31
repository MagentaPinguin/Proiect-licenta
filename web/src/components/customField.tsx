import React from "react";
interface CustomInputProps {
  labelText: string;
  onInputChange: () => void;
  textSize?: string;
  labelStyle?: string;
}
export default function CustomInput({
  labelText,
  onInputChange,
  textSize,
  labelStyle,
}: CustomInputProps) {
  return (
    <label className={`bg-transparent ${textSize} ${labelStyle} `}>
      {labelText + ": "}
      <input
        type="text"
        className={`outline-none h-auto w-auto text-center bg-custom-dark rounded-full p-3 ${textSize}`}
        onChange={onInputChange}
      />
    </label>
  );
}
