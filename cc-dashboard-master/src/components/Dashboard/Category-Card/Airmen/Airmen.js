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


// import React from 'react'
// import {useParams} from "react-router-dom";

// const IndividualEmail = ({allEmailsFromAPI}) => {
//     const {emailId} = useParams();
//     const email = allEmailsFromAPI.find(email => email.id === Number(emailId))
//     return (
//         <div>
//             <h4>{airmen}</h4>
//             <h4>{email.recipient}</h4>
//             <h4>{email.subject}</h4>
//             <h4>{email.message}</h4>
//         </div>
//     )
// }

// export default IndividualEmail