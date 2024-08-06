import { FC } from "react";

interface ListProps {
  itemWrap?: FC;
}

export default function ListWrap({}: ListProps) {
  return (
    <div className="bg-custom-dark w-[80%] h-[70%] rounded-3xl p-6">AAA</div>
  );
}
