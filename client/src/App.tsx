import logo from "./logo.svg";
import "./App.css";
import Message from "./components/Message/Message";
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
      name: "THREAT",
      value: 0.046526693,
    },
    {
      name: "PROFANITY",
      value: 0.56211716,
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to detecTroll!
          <Message />
        </p>
      </header>
      <ProgressBar data={array} />
    </div>
  );
}

export default App;
