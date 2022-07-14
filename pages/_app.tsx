import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";

const theme = extendTheme({
  fonts: {
    body: "'Montserrat', sans-serif",
    heading: "'Fraunces', serif",
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  colors: {
    primary: {
      darkCyan: "hsl(158, 36%, 37%)",
      darkHover: "hsl(158, 36%, 25%)",
      cream: "hsl(30, 38%, 92%)",
    },
    neutral: {
      veryDarkBlue: "hsl(212, 21%, 14%)",
      darkGrayishBlue: "hsl(228, 12%, 48%)",
      white: "hsl(0, 0%, 100%)",
    },
  },
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Box bg={"primary.cream"} color={"neutral.veryDarkBlue"}>
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
};

export default MyApp;
