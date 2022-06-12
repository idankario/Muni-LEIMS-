import { styled } from "@mui/material/styles";
import BlueWordImage from "./images/login.png";
import YellowWordImage from "./images/word.png";

const Container = styled("div")((bgimage) => ({
  maxWidth: "100vw",
  background: bgimage.bgimage
    ? `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${YellowWordImage}) no-repeat`
    : `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${BlueWordImage}) no-repeat`,
  backgroundSize: "100% 100%",
  minHeight: "100vh",
  "& main, & form": {
    paddingTop: "50px",
  },
}));
export default Container;