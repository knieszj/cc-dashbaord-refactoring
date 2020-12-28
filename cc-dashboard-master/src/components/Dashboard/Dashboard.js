import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {BrowserRouter as Router, Link} from "react-router-dom";
import CategoryCard from "./Category-Card/CategoryCard";
import "./Dashboard.css";

const Dashboard = ({ logoutButtonClick, sqdAdminStatus }) => {
    // Refactored out 'flight codes' and 'squadronDataOrWhateverName' because only 1 GET request is made due to database doing INNER JOIN to combine data


    const unfilteredAdminCategories = Object.keys(sqdAdminStatus[0]);
    //grabs the keys of everything pass in the intiial GET request for squadron admin information/status
    const filteredAdminCategories = unfilteredAdminCategories.filter(element => element !== 'airmen_id' && element !== 'first_name' && element !== 'last_name' && element !== 'updated_at' && element !== 'flight_id' && element !== 'flight_name'   ? element : null)
    //filters out everything that has to do with flights or specific airmen which leaves behind only the training categories #FTW

    const mapAdminCategories = filteredAdminCategories.map(cat => <CategoryCard category={cat} sqdAdminInfo={sqdAdminStatus}/>)

    console.log(`filtered admin categories`, filteredAdminCategories)
    return (
        // Removed the hard coding of flights
        <div className="dashboard-overview">
            <h1 id="dashboard-title">Welcome to the Dashboard</h1>
            <div className="cards">
                <Container>
                    <Router>
                        <Row>
                            <Col>
                                {mapAdminCategories}
                            </Col>
                        </Row>
                        <Link to="/">
                            {" "}
                            <button
                                onClick={(event) => logoutButtonClick(event)}
                                className="logout-button"
                            >
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
