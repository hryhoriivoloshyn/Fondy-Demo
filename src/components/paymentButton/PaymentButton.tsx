import { useFondy } from "../../customHooks/useFondy";
import { StyledButton } from "./style";

const PaymentButton = () => {
  const Connect = useFondy();
  return (
    <StyledButton variant="contained" onClick={Connect}>
      Відправити 200 грн
    </StyledButton>
  );
};

export default PaymentButton;
