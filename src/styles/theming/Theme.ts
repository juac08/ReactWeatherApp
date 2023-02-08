import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { buttonTheme } from "./Button";

export const theme = extendTheme({
  colors: {
    brand: {
      "50": "#EBEAFA",
      "75": "#BFBCEF",
      "100": "#C8C5F1",
      "200": "#A4A0E9",
      "300": "#817BE0",
      "400": "#5E55D7",
      "500": "#3A30CF",
      "600": "#2F27A5",
      "700": "#231D7C",
      "800": "#171353",
      "900": "#0C0A29",
    },
    gray: {
      100: "#7f7f7f",
      200: "#6f6f6f",
      300: "#5f5f5f",
      400: "#4f4f4f",
      500: "#3f3f3f",
      600: "#2f2f2f",
      700: "#1f1f1f",
      800: "#0f0f0f",
      900: "#0f0f0f",
    },
  },
  components: {
    buttonTheme,
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode("#ffffff", "#000000")(props),
        color: mode("#000000", "#ffffff")(props),
      },
    }),
  },
});
