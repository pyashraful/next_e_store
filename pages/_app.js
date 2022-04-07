import "../styles/globals.css";
import { StoreProvider } from "../utils/store";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#D23F57",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <StoreProvider>
          <Component {...pageProps} />
        </StoreProvider>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default MyApp;
