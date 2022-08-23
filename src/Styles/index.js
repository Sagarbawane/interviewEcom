import { Button, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import "@fontsource/poppins";
import "@fontsource/open-sans";
export const Heading = styled(Typography)(() => ({
  fontStyle: "normal",
  fontWeight: 900,
  fontSize: "18px",
  lineHeight: "22px",
  color: "#151515",
  fontFamily: "Poppins",
  margin: "10px auto",
}));

export const ButtonComponent = styled(Button)(() => ({
  right: "0px",
  top: "calc(50% - 36px/2 + 0.5px)",
  background: "#6A983C",
  border: "2px solid #46760A",
  borderRadius: "12px",
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: "14px",
  lineHeight: "22px",
  fontFamily: "Poppins",
  color: "#FFFFFF",
  "&:hover": {
    background: "#6A983C",
    color: "#fff",
  },
}));

export const CardTitle = styled(Typography)(() => ({
  fontStyle: "normal",
  fontWeight: 800,
  fontSize: "16px",
  lineHeight: "22px",
  color: "#151515",
  fontFamily: "Poppins",
  margin: "4px auto",
}));

export const CardSubTitle = styled(Typography)(() => ({
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "12px",
  lineHeight: "16px",
  color: "#575757",
  fontFamily: "Open Sans",
  margin: "4px auto 0px",
}));

export const BigHeading = styled(Typography)(() => ({
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "26px",
  lineHeight: "22px",
  margin: "10px 8px",
  color: "#151515",
}));

export const SearchBox = styled(Box)(() => ({
  position: "relative",
  width: "100%",
  background: "#F9F9F9",
  border: "1px solid #D1D1D1",
  borderRadius: "12px",
  display: "flex",
  justifyContent: "space-between",
}));

export const VerticalLine = styled(Box)(() => ({
  borderLeft: "2px solid #D1D1D1",
  height: "30px",
  margin: "auto 10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const CategoryContainer = styled(Box)(() => ({
  margin: "20px auto",
}));
// export const ActionIconsContainerMobile = styled(Box)(() => ({
//   display: "flex",
//   background: Colors.shaft,
//   position: "fixed",
//   bottom: 0,
//   left: 0,
//   width: "100%",
//   alignItems: "center",
//   zIndex: 99,
//   borderTop: `1px solid ${Colors.border}`,
// }));

// export const ActionIconsContainerDesktop = styled(Box)(() => ({
//   flexGrow: 0,
// }));

// export const MyList = styled(List)(({ type }) => ({
//   display: type === "row" ? "flex" : "block",
//   flexGrow: 3,
//   justifyContent: "center",
//   alignItems: "center",
// }));

// export const DrawerCloseButton = styled(IconButton)(() => ({
//   position: "absolute",
//   top: 10,
//   left: DrawerWidth,
//   zIndex: 1999,
// }));
