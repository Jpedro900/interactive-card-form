import cardfront from "../../assets/images/bg-card-front.png";
import cardlogo from "../../assets/images/card-logo.svg";
import { useCardInfo } from "../../hooks/CardInfoContext";
import { useEffect, useState } from "react";

type Props = {};

const CardFront = (props: Props) => {
  const { cardInfo } = useCardInfo();

  const cardNumber = cardInfo.cardNumber || "0000 0000 0000 0000"
  const cardHolder = cardInfo.cardHolder || "JANE APPLESEED"
  const cardExpire = cardInfo.cardExpireMM && cardInfo.cardExpireYY ? `${cardInfo.cardExpireMM}/${cardInfo.cardExpireYY}` : "00/00"

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  

  return (
    <div className={`absolute ${windowWidth > 768 ? 'top-[17%] left-[10%]' : 'bottom-[-26.2%] left-[5%] size-[75%]'} text-white`}>
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
