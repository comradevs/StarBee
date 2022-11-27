import { BrowserRouter as Router, Routes as Switch, Route, Link } from "react-router-dom";

import CreateUser from "pages/CreateUser/CreateUser";

import { Paths } from "./constants";

const Routes = () => (
  <Router>
    <Switch>
      <Route path={Paths.DEFAULT} element={<CreateUser />} />
      <Route path={Paths.CREATE_USER} element={<CreateUser />} />
    </Switch>
  </Router>
);

export default Routes;
