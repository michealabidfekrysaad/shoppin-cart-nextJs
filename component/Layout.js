import Navbar from "./Navbar/Navbar";
import { Provider } from "react-redux";
import store from "../store/Index";
import { StaticRouter } from "react-router";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Provider store={store}>
        {/* <StaticRouter> */}
          <Navbar />
          <section>
          {children}
          </section>
        {/* </StaticRouter> */}
      </Provider>
    </div>
  );
};

export default Layout;
