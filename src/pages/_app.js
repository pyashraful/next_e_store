import { useEffect, useState } from "react";
import "@styles/globals.css";
import { StoreProvider } from "@utils/store";
import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../common/constants/theme";
import createEmotionCache from "../common/constants/createEmotionCache";
import { useRouter } from "next/router";
import LoadingCircle from "@components/LoadingCircle";
import Layout from "@components/Layout";
import { SnackbarProvider } from "notistack";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [loading, setLoading] = useState(false);
  // const [initial, setInitial] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url) => {
      setLoading(true);
    };
    const handleStop = () => {
      setLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setInitial(false);
  //   }, 1000);
  // });

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <SnackbarProvider
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <StoreProvider>
            {loading ? (
              <LoadingCircle />
            ) : Component.authPage ? (
              <Component {...pageProps} />
            ) : (
              <Layout>
                <Component {...pageProps} />
              </Layout>
            )}
          </StoreProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
