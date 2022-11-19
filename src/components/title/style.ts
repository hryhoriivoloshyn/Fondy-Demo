import Typography from "@mui/material/Typography";
import { styled, TypographyProps } from "@mui/system";

export const StyledTypography = styled(Typography)<TypographyProps>(() => ({
  position: "absolute",
  top: "20%",
  left: "0",
  right: "0",
  margin: "auto",
}));
