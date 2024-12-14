import React, { createContext, useState, ReactNode } from "react";

// Tipos de dados que queremos compartilhar
interface CardInfo {
  cardHolder: string;
  cardNumber: string;
  cardExpireMM: string;
  cardExpireYY: string;
  cardCvc: string;
}

interface CardInfoContextType {
  cardInfo: CardInfo;
  setCardInfo: (cardInfo: CardInfo) => void;
}

// Criando o Contexto
const CardInfoContext = createContext<CardInfoContextType | undefined>(undefined);

type CardInfoProviderProps = {
  children: ReactNode;
};

// Provedor de contexto
export const CardInfoProvider = ({ children }: CardInfoProviderProps) => {
  const [cardInfo, setCardInfo] = useState<CardInfo>({
    cardHolder: "",
    cardNumber: "",
    cardExpireMM: "",
    cardExpireYY: "",
    cardCvc: "",
  });

  return (
    <CardInfoContext.Provider value={{ cardInfo, setCardInfo }}>
      {children}
    </CardInfoContext.Provider>
  );
};

// Hook customizado para acessar o contexto
export const useCardInfo = (): CardInfoContextType => {
  const context = React.useContext(CardInfoContext);
  if (!context) {
    throw new Error("useCardInfo must be used within a CardInfoProvider");
  }
  return context;
};
