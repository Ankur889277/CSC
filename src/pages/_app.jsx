import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { QueryParamProvider } from "use-query-params";
import { NextAdapter } from "next-query-params";
import { persistor, wrapper } from "@redux/stores";
import { PersistGate } from "redux-persist/integration/react";

import CustomToastContainer from "@common/CustomToastContainer";
import StyledComponentsRegistry from "../lib/registry";
import ErrorBoundary from "@components/ErrorBoundary";
import "@styles/globals.css";

function App({ Component, pageProps }) {
  const user = useSelector(state => state.auth.user);

  return (
    <ErrorBoundary>
      <PersistGate loading={null} persistor={persistor}>
        <QueryParamProvider adapter={NextAdapter}>
          <CustomToastContainer />
          <StyledComponentsRegistry>
            <Component {...pageProps} />
          </StyledComponentsRegistry>
        </QueryParamProvider>
      </PersistGate>
    </ErrorBoundary>
  );
}

export default wrapper?.withRedux(App);
