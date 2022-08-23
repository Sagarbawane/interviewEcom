import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import "@fontsource/poppins";

export const Heading = styled(Typography)(() => ({
  fontStyle: "normal",
  fontWeight: 900,
  fontSize: "18px",
  lineHeight: "22px",
  color: "#151515",
  fontFamily: "Poppins",
  margin: "10px auto",
}));
