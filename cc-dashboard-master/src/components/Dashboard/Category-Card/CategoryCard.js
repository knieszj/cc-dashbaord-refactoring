import React, { useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import FlightList from "./Flights/FlightList";


const CategoryCard = ({ category, flights, squadronDataOrAnotherName }) => {
  return (
    <>
    <Card style={{ width: "15rem" }}>
      <Card.Body>
        <Card.Title>{category}</Card.Title>
        <ListGroup>
          <FlightList flightCodes={flights} airmen={squadronDataOrAnotherName} category={category}/>
        </ListGroup>
      </Card.Body>
    </Card>

    </>
  );
};

export default CategoryCard;
