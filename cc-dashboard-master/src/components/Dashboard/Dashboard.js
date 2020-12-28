import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";
import CategoryCard from "./Category-Card/CategoryCard";
import "./Dashboard.css";
import AdminCard from "./Category-Card/AdminCard";

const Dashboard = ({
  logoutButtonClick,
  flightCodes,
  squadronDataOrWhateverName,
}) => {
  return (
    <div className="dashboard-overview">
      <h1 id="dashboard-title">Welcome to the Dashboard</h1>
      <div className="cards">
        <Container>
          <Router>
            <Row>
              <Col>
                <CategoryCard
                  category="Fitness"
                  flights={flightCodes}
                  squadronDataOrAnotherName={squadronDataOrWhateverName}
                />
              </Col>
              <Col>
                <CategoryCard
                  category="ADLS"
                  flights={flightCodes}
                  squadronDataOrAnotherName={squadronDataOrWhateverName}
                />
              </Col>
              <Col>
                <CategoryCard
                  category="Evaluation"
                  flights={flightCodes}
                  squadronDataOrAnotherName={squadronDataOrWhateverName}
                />
              </Col>
              <Col>
                <CategoryCard
                  category="Medical"
                  flights={flightCodes}
                  squadronDataOrAnotherName={squadronDataOrWhateverName}
                />
              </Col>
              <Col>
                <AdminCard
                  category="Admin"
                  options={["Add", "Remove", "Update"]}
                  squadronDataOrAnotherName={squadronDataOrWhateverName}
                />
              </Col>
            </Row>
            <Link to="/">
              {" "}
              <button
                onClick={(event) => logoutButtonClick(event)}
                className="logout-button"
              >
                {" "}
                Logout{" "}
              </button>
            </Link>
          </Router>
        </Container>
      </div>
    </div>
  );
};

export default Dashboard;
