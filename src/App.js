import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Items from "./components/Items/Items";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Banner />
            <Items />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
