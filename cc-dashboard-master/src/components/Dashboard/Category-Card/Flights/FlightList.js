import React, { useState } from "react";
import { ListGroup, Button } from "react-bootstrap";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import Airmen from "../Airmen/Airmen";
import CardModal from "../CardModal";

const FlightList = ({ flightCodes, airmen, category }) => {
  const [bShowModal, setModalShow] = useState(false);
  const [activeFlight, setActiveFlight] = useState("");
  return (
    <>
      {" "}
      {flightCodes.flights.map((flightName, idx) => {
        return (
          <Button key={idx} block size="lg" onClick={() => { 
            setActiveFlight(flightName);
            setModalShow(true);
            }}>
            {flightName}
          </Button>
        );
      })}
      <CardModal
        show={bShowModal}
        onHide={() => setModalShow(false)}
        content={airmen}
        flightname={activeFlight}
        category={category}
      />
    </>
  );
};

export default FlightList;

