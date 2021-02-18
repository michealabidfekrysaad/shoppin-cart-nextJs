import Navbar from "./Navbar/Navbar";
import { Provider } from "react-redux";
import store from "../store/Index";

const Layout = ({ children }) => {
  return (
    <div>
      <Provider store={store}>
          <Navbar />
          <section>
          {children}
          </section>
      </Provider>
    </div>
  );
};

export default Layout;
