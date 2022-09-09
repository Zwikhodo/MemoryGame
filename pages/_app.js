import { useState } from "react";
import Layout from "../Components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [users, setUser] = useState("");

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
