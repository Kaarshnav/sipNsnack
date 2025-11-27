import "./App.css";
import { Header, Footer, NavBar } from "./components";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Heelo from sip N snack</h1>
      <Header />
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
