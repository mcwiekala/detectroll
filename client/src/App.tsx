import React from "react";
import logo from "./logo.svg";
import "./index.scss";
import Message from "./components/Message/Message";
import Logo from "./components/Logo/Logo";
import SearchBox from "./components/SearchBox/SearchBox";
function App() {
  return (
    <>
      <Logo />
      <SearchBox />
    </>
  );
}

export default App;
