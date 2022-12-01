import React from "react";
import Image from "next/image";

type CardProps = {
  description: string;
  date: string;
  bgColor: string;
};
export default function Card({ description, date, bgColor }: CardProps) {
  return (
    <div className={`cardWrapper ${bgColor}`}>
      <p className="cardWrapper_description">{description}</p>
      <div className="cardWrapper__footer">
        <div>{date}</div>
        <button>
          <Image
            src={"/trash.svg"}
            alt={"delete note"}
            width={32}
            height={32}
          />
        </button>
      </div>
    </div>
  );
}
