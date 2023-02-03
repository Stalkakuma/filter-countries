import { extendTheme } from "@chakra-ui/react";
import "@fontsource/karla/300.css";
import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const solid = defineStyle({
  background: "white",
  boxShadow: "0.2px 0.2px black",
  border: "1px solid black",
  transition: "ease-in 0.08s",
  _active: {
    background: "#ff422a",
    boxShadow: "1px 1px black",
    color: "white",
  },
  _hover: {
    transform: "scale(1.03)",
  },
});

export const buttonTheme = defineStyleConfig({
  variants: { solid },
});

export const theme = extendTheme({
  components: {
    Button: buttonTheme,
  },
  fonts: {
    heading: `'karla', sans-serif`,
    body: `'Helvetica', Arial, sans-serif`,
  },
  colors: {
    menuGray: "#556E86",
    activeOrange: "#ff422a",
  },
  styles: {
    global: {
      "*": {
        boxSizing: "border-box",
        padding: "0",
        margin: "0",
      },
      "html, body": { maxWidth: "100vw", overflowX: "hidden" },
      body: {
        overflow: "hidden",
        height: "100vh",
        background: "#f8f4f1",
        backgroundImage:
          "linear-gradient(-225deg, #e6e6e6 0%, #f8f4f1 48%, #cfcfcf 100%)",
      },
    },
    a: {
      textDecoration: "none",
    },
  },
});
