import React from "react";
import "./index.scss";
import Logo from "./components/Logo/Logo";
import ProgressBar from "./components/ProgressBar/ProgressBar";

function App() {
  const array = [
    {
      name: "Toxicity",
      value: 0.9646382,
    },
    {
      name: "Insult",
      value: 0.51453596,
    },
    {
      name: "Threat",
      value: 0.856526693,
    },
    {
      name: "Profanity",
      value: 0.56211716,
    },
  ];
  return (
    <>
      <Logo />
      <ProgressBar data={array} />
    </>
  );
}

export default App;
