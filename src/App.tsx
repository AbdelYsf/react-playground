import "./App.css";
import Routing from "./routing/Routing";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routing />
    </Router>
  );
}

export default App;
