import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Router>
      <Header />
        <Switch>
          <Route></Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
