import cardback from "../../assets/images/bg-card-back.png";
import { useCardInfo } from "../../hooks/CardInfoContext";
import { useEffect, useState } from "react";

type Props = {

};

function CardBack({}: Props) {
  const { cardInfo } = useCardInfo();
  const cvc = cardInfo.cardCvc || "000";

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
    useEffect(() => {
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

  return (
    <div className={`absolute ${windowWidth > 768 ? 'bottom-[25%] left-[18%]' : 'top-[15%] right-[5%] size-[75%]'}`}>
      <img src={cardback} alt="" />
      <span className={`text-white absolute ${windowWidth > 768 ? 'top-[44%] right-[12%]' : 'top-[37%] right-[12%] text-xs'}`}>{cvc}</span>
    </div>
  );
}

export default CardBack;
