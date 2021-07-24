import Meta from "./Meta";
import Footer from "./Footer";
import Header from "./Header";
import PopUp from "./PopUp";
import Floater from "./Floater";
const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Header />
      <main>{children}</main>
      <Footer />
      <PopUp />
      <Floater />
    </>
  );
};

export default Layout;
