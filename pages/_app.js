import "../styles/globals.css";
import Layout from "../component/Layout";
import { Provider } from "react-redux";
import store from "../store/Index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../styles/Home.module.css"

function MyApp({ Component, pageProps }) {
  return (
    // <Provider store={store}>
      // <Router>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      //  </Router>
    // </Provider>
    // <h1>index</h1>
  );
}

export default MyApp;
