import React from "react";
import { ListGroup } from "react-bootstrap";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";

const Airmen = ({ squadronData }) => {
  const match = useRouteMatch();
  const airmen = squadronData.map((airmen) => {
    return (
      <Link to={`${match.url}/:${airmen}`}>
        <ListGroup.Item>{airmen}</ListGroup.Item>
      </Link>
    );
  });

  return (
    <>
      <Router>
        <Switch>
          <Route path={`${match.url}/:airmanId`}>
            <h5>
              {airmen}
              <p>Airmen has medical exemptions</p>
            </h5>
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default Airmen;

