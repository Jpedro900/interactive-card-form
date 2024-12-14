import React , { useState } from "react";
import cardback from "../../assets/images/bg-card-back.png";

type Props = {

};

function CardBack({}: Props) {
  const [cvc, setCvc] = useState("000");

  return (
    <div className="absolute top-[15%] right-[5%] size-[75%] ">
      <img src={cardback} alt="" />
      <span className=" text-white absolute top-[37%] right-[12%] text-xs">{cvc}</span>
    </div>
  );
}

export default CardBack;
