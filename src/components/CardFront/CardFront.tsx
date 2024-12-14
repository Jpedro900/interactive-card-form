import React, { useState } from "react";
import cardfront from "../../assets/images/bg-card-front.png";
import cardlogo from "../../assets/images/card-logo.svg";

type Props = {};

const CardFront = (props: Props) => {
  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000");
  const [cardHolder, setCardHolder] = useState("JANE APPLESEED");
  const [cardExpire, setCardExpire] = useState("00/00");

  return (
    <div className="absolute bottom-[-26.2%] left-[5%] size-[75%] text-white ">
      <img src={cardfront} alt="" />
      <img
        src={cardlogo}
        alt=""
        className="absolute top-[10%] left-[7%] w-16"
      />
      <img src="" alt="" />
      <span className=" absolute bottom-[40%] left-[7%] w-full text-2xl">
        {cardNumber}
      </span>
      <span className=" absolute bottom-[25%] left-[7%] text-xs">{cardHolder}</span>
      <span className=" absolute bottom-[25%] right-[7%] text-xs">{cardExpire}</span>
    </div>
  );
};

export default CardFront;
