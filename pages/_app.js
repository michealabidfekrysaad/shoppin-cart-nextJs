import "../styles/globals.css";
import Layout from "../component/Layout";
import { Provider } from "react-redux";
import store from "../store/Index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../styles/Home.module.css"

function MyApp({ Component, pageProps }) {
  return (
        <Layout>
          <Component {...pageProps} />
        </Layout>
  );
}

export default MyApp;
