import Navbar from "./Navbar/Navbar";
// import Footer from "./Footer";
import { Provider } from "react-redux";
import store from "../store/Index"; 
import { StaticRouter } from "react-router-dom";




const Layout = ({ children }) => {
  return (
    <div className="content">
      <Provider store={store}>
      <StaticRouter>
        <Navbar />
        {children}
        {/* <Footer /> */}
        </StaticRouter>
      </Provider>
    </div>
  );
};

export default Layout;
