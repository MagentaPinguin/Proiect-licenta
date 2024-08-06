interface CustomInputProps {
  labelText: string;
  initialValue?: string;
  onInputChange: any;
  textSize?: string;
  labelStyle?: string;
  disabled?: boolean;
}
export default function CustomInput({
  initialValue,
  labelText,
  onInputChange,
  textSize,
  labelStyle,
  disabled,
}: CustomInputProps) {
  return (
    <label className={`bg-transparent ${textSize} ${labelStyle} `}>
      {labelText + ": "}
      <input
        type="text"
        value={initialValue}
        disabled={disabled}
        className={`outline-none h-auto w-auto text-center bg-custom-dark rounded-full p-3 ${textSize}`}
        onChange={(e) => {
          onInputChange(e.target.value);
        }}
      />
    </label>
  );
}
