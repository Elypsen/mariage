import "./App.css";
import NavBar from "./components/navbar";
import VotreHistoire from "./components/votreHistoire";
import Planning from "./components/planning";
import { useState } from "react";
import Footer from "./components/footer";

const App = () => {
  const [planning, setPlanning] = useState(true);
  const [histoire, setHistoire] = useState(false);

  return (
    <>
      <NavBar setHistoire={setHistoire} setPlanning={setPlanning} />
      <VotreHistoire histoire={histoire} />
      <Planning planning={planning} />
      <Footer/>
    </>
    
  );
};

export default App;
