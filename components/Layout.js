import Meta from "./Meta";
// import Hero from "../components/Hero";
import Header from "./Header";
const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Header />
      {/* <Hero /> */}
      <main>{children}</main>
    </>
  );
};

export default Layout;
