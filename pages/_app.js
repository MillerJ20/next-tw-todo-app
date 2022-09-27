import "../styles/globals.css";
import { Layout } from "../components/Layout";
import { SpacetimeProvider } from "@spacetimexyz/react";
import { Spacetime } from "@spacetimexyz/client";

const spacetime = new Spacetime();

function MyApp({ Component, pageProps }) {
  return (
    <SpacetimeProvider spacetime={spacetime}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SpacetimeProvider>
  );
}

export default MyApp;
