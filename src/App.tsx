import  { useState } from "react";
import mobileBackground from "./assets/images/bg-main-mobile.png";
import CardBack from "./components/CardBack/CardBack";
import CardFront from "./components/CardFront/CardFront";
import Form from "./components/Form/Form";
import ThankYou from "./components/ThankYou/ThankYou";
import { CardInfoProvider } from "./hooks/CardInfoContext";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <CardInfoProvider>
      
      <div className=" h-screen font-body text-[18px]">
        <div className=" w-screen relative">
          <img
            src={mobileBackground}
            alt=""
            className="object-cover w-screen"
          />
          <CardBack />
          <CardFront />
        </div>
        {isSubmitted ? <ThankYou /> : <Form setIsSubmitted={setIsSubmitted}
        />}
      </div>
    </CardInfoProvider>
  );
}

export default App;
