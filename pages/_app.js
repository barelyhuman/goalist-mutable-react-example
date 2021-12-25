import { ThemeProvider } from "styled-components";
import theme from "../configs/theme";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
      <style jsx global>{`
        body {
          background: ${theme.colors.background};
        }
      `}</style>
    </>
  );
}

export default MyApp;
