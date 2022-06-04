import React from "react";
import logo from "./logo.svg";
import "./index.scss";
import Message from "./components/Message/Message";
import Logo from "./components/Logo/Logo";
import SearchBox from "./components/SearchBox/SearchBox";
import TextArea from "./components/TextArea/TextArea";
function App() {
  return (
    <>
      <Logo />
      <SearchBox />
      <TextArea />
    </>
  );
}

export default App;
