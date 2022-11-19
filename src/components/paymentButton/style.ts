import { Button, ButtonProps, styled } from "@mui/material";
import { purple } from "@mui/material/colors";

export const StyledButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
  fontWeight: "bold",
  width: "250px",
  height: "50px",
  position: "absolute",
  top: "0",
  bottom: "0",
  left: "0",
  right: "0",
  margin: "auto",
}));
