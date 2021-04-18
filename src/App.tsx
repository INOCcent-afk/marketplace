import { Route, Switch } from "react-router";
import Nav from "./components/Nav/index";

import LogIn from "./pages/LogIn";
import Shop from "./pages/Shop";

const App: React.FC = () => {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/" exact component={LogIn} />
        <Route path="/shop" exact component={Shop} />
      </Switch>
    </div>
  );
};

export default App;
