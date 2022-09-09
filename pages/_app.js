import { useState } from "react";
import Layout from "../Components/Layout";
import "../styles/globals.css";
import { UserContext } from "./UserContext";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState('heey')
 
  return (
    <UserContext.Provider value= {{user, setUser}}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserContext.Provider>
  );
}

export default MyApp;
