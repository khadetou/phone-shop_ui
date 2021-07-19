import Aos from "aos";
import Meta from "./Meta";
import Header from "./Header";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Meta />
      <div>{children}</div>
    </>
  );
};

export default Layout;
