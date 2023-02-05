import { extendTheme } from "@chakra-ui/react";
import "@fontsource/karla/300.css";
import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const solid = defineStyle({
  bg: "activeOrange",
  color: "white",
  py: 3,
  transition: "ease-in 0.08s",
  _hover: {
    bg: "buttonHover",
  },
  _active: {
    bg: "buttonActive",
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
    shadowBlack: "#485F78",
    buttonHover: "#eb0231",
    buttonActive: "#fc0000",
  },
  shadows: {
    default: "2px 1px var(--chakra-colors-shadowBlack)",
    active: "2px 1px var(--chakra-colors-activeOrange)",
  },
  borders: {
    cardDefault: "3px solid var(--chakra-colors-shadowBlack)",
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
      main: {
        maxW: "container.lg",
        height: "100vh",
      },
      "h2, h3": {
        color: "black",
      },
    },
    a: {
      textDecoration: "none",
    },
  },
});
