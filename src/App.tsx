import  { useState , useEffect } from "react";
import mobileBackground from "./assets/images/bg-main-mobile.png";
import descktopBackground from "./assets/images/bg-main-desktop.png";
import CardBack from "./components/CardBack/CardBack";
import CardFront from "./components/CardFront/CardFront";
import Form from "./components/Form/Form";
import ThankYou from "./components/ThankYou/ThankYou";
import { CardInfoProvider } from "./hooks/CardInfoContext";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
            
  return (
    <CardInfoProvider>
      
      <div className={`h-screen font-body text-[18px]`}>
        <div className=" w-screen relative">
          <img
            src={windowWidth > 768 ? descktopBackground : mobileBackground}
            alt=""
            className={`object-cover ${windowWidth > 768 ? 'h-screen' : 'w-screen'}`}
          />
          <CardBack />
          <CardFront />
        </div>
        <div className={`${windowWidth > 768 ?'absolute bottom-[60%] right-[25%] translate-x-1/2 translate-y-1/2' : ''}`}>
          {isSubmitted ? <ThankYou /> : <Form setIsSubmitted={setIsSubmitted}
          />}
        </div>
      </div>
    </CardInfoProvider>
  );
}

export default App;
