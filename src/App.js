import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import NewVehicle from "./components/newvehicle";
import UsedVehicle from "./components/usedtractor";
import VehicleEnquiry from "./components/vehicleenquiry";
import Contact from "./components/contact";
export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/new-vehicle">
            <NewVehicle />
          </Route>
          <Route path="/used-vehicle">
            <UsedVehicle />
          </Route>
          <Route path="/vehicle-enquiry">
            <VehicleEnquiry />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        {/* <Redirect from="/" to="/new-vehicle" /> */}
      </div>
    </Router>
  );
}