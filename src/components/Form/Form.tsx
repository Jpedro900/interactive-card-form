import React, { useState } from "react";
import { useCardInfo } from "../../hooks/CardInfoContext";

type Props = {
  setIsSubmitted: (isSubmitted: boolean) => void;
};

function Form({ setIsSubmitted }: Props) {
  const [errors, setErrors] = useState({
    cardHolder: false,
    cardNumber: false,
  });
  const { cardInfo, setCardInfo } = useCardInfo();

  const { cardHolder, cardNumber, cardExpireMM, cardExpireYY, cardCvc } =
    cardInfo;

  const isFormValid =
    cardHolder &&
    cardNumber &&
    cardExpireMM &&
    cardExpireYY &&
    cardCvc &&
    !errors.cardNumber;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    let value = e.target.value;

    setCardInfo({
      ...cardInfo,
      [field]: value,
    });
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\D/g, "")
    const formattedValue = rawValue
      .slice(0, 16)
      .replace(/(\d{4})(?=\d)/g, "$1 ")

    setCardInfo({
      ...cardInfo,
      cardNumber: formattedValue, 
    })
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (validateFields()) {
      setIsSubmitted(true);
    } else {
      alert("Please correct the errors in the form");
    }
  };

  const validateFields = () => {
    const newErrors = {
      cardHolder: !cardHolder,
      cardNumber: !/^\d{4} \d{4} \d{4} \d{4}$/.test(cardNumber),
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
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
            maxLength={20}
            placeholder="e.g Jane Applessed"
            value={cardInfo.cardHolder}
            onChange={(e) => handleInputChange(e, "cardHolder")}
          />
        </div>
        <div>
          <label className=" input-label " htmlFor="formNumber">
            CARD NUMBER
          </label>
          <input
            className={`input-field ${
              errors.cardNumber ? "border-red-500" : ""
            }`}
            name="formNumber"
            type="text"
            maxLength={19}
            placeholder="e.g 0000 0000 0000 0000"
            value={cardInfo.cardNumber}
            onChange={handleCardNumberChange}
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
                maxLength={2}
                value={cardInfo.cardExpireMM}
                onChange={(e) => handleInputChange(e, "cardExpireMM")}
              />
              <input
                className=" input-field w-20 "
                name="formExpire"
                type="text"
                placeholder="YY"
                maxLength={2}
                value={cardInfo.cardExpireYY}
                onChange={(e) => handleInputChange(e, "cardExpireYY")}
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
              maxLength={3}
              placeholder="e.g 000"
              value={cardInfo.cardCvc}
              onChange={(e) => handleInputChange(e, "cardCvc")}
            />
          </div>
        </div>
        <button
          className={`bg-[#351347] text-white w-full rounded-lg h-14 ${
            isFormValid ? "" : "opacity-50 cursor-not-allowed"
          }`}
          type="submit"
          disabled={!isFormValid}
        >
          Confirm
        </button>
      </form>
    </div>
  );
}

export default Form;
