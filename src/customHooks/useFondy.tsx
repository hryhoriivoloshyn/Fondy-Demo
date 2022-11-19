import axios from "axios";
import { sha1 } from "crypto-hash";

interface TransactionData {
  order_id: string;
  merchant_id: string;
  order_desc: string;
  amount: number;
  currency: string;
}

interface TransactionBody extends TransactionData {
  signature: string;
}

type FondyRequest = {
  request: TransactionBody;
};

export const useFondy = (): (() => Promise<void>) => {
  const StartTransaction = async () => {
    const transactionData: TransactionData = {
      order_id: Math.floor(Math.random() * 100000).toString(),
      merchant_id: process.env.REACT_APP_FONDY_MERCHANT_ID ?? "",
      order_desc: "Transaction showcase",
      amount: 20000,
      currency: "UAH",
    };

    const signature = await CreateSignature(transactionData);

    const fondyRequest: FondyRequest = {
      request: { ...transactionData, signature: signature },
    };
    try {
      const { data } = await axios.post(
        "https://pay.fondy.eu/api/checkout/url/",
        fondyRequest
      );
      window.open(data.response.checkout_url);
    } catch (e) {
      console.log(e);
    }
  };

  const CreateSignature = async (transactionData: TransactionData) => {
    const sortedKeys = Object.keys(transactionData).sort();

    const joinedSignatureParams = sortedKeys
      .map((k) => transactionData[k as keyof TransactionData])
      .join("|");

    const signatureRaw = `${process.env.REACT_APP_FONDY_MERCHANT_PASSWORD}|${joinedSignatureParams}`;

    return await sha1(signatureRaw);
  };
  return StartTransaction;
};
