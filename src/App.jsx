import "./App.css";
import { Header, Footer, NavBar } from "./components";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <Header />
      {/* <NavBar /> */}
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
