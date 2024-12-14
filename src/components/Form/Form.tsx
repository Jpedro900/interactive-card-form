import React, { useState } from "react";

type Props = { setIsSubmitted: (isSubmitted: boolean) => void };

function Form({ setIsSubmitted }: Props) {
  const [cardHolder, setCardHolder] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpireMM, setCardExpireMM] = useState("");
  const [cardExpireYY, setCardExpireYY] = useState("");
  const [cardCvc, setCardCvc] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (cardHolder && cardNumber && cardExpireMM && cardCvc && cardExpireYY) {
      setIsSubmitted(true);
    } else {
      alert("Please fill in all the fields");
    }
  };

  return (
    <div className=" mt-24 px-6 h-[50%]">
      <form onSubmit={handleSubmit} className=" flex flex-col gap-8">
        <div>
          <label className=" input-label " htmlFor="formName">
            CARDHOLDER NAME
          </label>
          <input
            className=" input-field "
            name="formName"
            type="text"
            placeholder="e.g Jane Applessed"
            value={cardHolder}
            onChange={(e) => setCardHolder(e.target.value)}
          />
        </div>
        <div>
          <label className=" input-label " htmlFor="formNumber">
            CARD NUMBER
          </label>
          <input
            className=" input-field "
            name="formNumber"
            type="text"
            placeholder="e.g 0000 0000 0000 0000"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>
        <div className=" flex justify-between">
          <div className=" w-1/2">
            <label className=" input-label " htmlFor="formExpire">
              EXP. DATE (MM/YY)
            </label>
            <div className=" flex justify-start gap-2">
              <input
                className=" input-field w-20 "
                name="formExpire"
                type="text"
                placeholder="MM"
                value={cardExpireMM}
                onChange={(e) => setCardExpireMM(e.target.value)}
              />
              <input
                className=" input-field w-20 "
                name="formExpire"
                type="text"
                placeholder="YY"
                value={cardExpireYY}
                onChange={(e) => setCardExpireYY(e.target.value)}
              />
            </div>
          </div>
          <div className=" w-1/2 ">
            <label className=" input-label " htmlFor="formCvc">
              CVC
            </label>
            <input
              className=" input-field "
              name="formCvc"
              type="text"
              placeholder="e.g 000"
              value={cardCvc}
              onChange={(e) => setCardCvc(e.target.value)}
            />
          </div>
        </div>
        <button
          className=" bg-[#351347] text-white w-full rounded-lg h-14"
          type="submit"
        >
          Confirm
        </button>
      </form>
    </div>
  );
}

export default Form;
