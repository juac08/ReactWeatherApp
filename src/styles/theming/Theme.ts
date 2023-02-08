import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { buttonTheme } from "./Button";
import { textTheme } from "./Text";

export const theme = extendTheme({
  colors: {
    primary: {
      100: "purple.100",
      200: "purple.200",
      300: "purple.300",
      400: "purple.400",
      500: "purple.500",
      600: "purple.600",
      700: "purple.700",
      800: "purple.800",
      900: "purple.900",
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
    textTheme,
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode("#ffffff", "#181818")(props),
        color: mode("#000000", "#ffffff")(props),
      },
      border: {
        borderColor: mode("#6B46C1", "#B794F4")(props),
      },
    }),
  },
});
