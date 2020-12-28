import React, { useState } from "react";
import { Card, ListGroup, Button } from "react-bootstrap";
import AdminModal from "./AdminModal";

const CategoryCard = ({ category, options }) => {
  const [bShowModal, setModalShow] = useState(false);
  const [activeOption, setActiveOption] = useState("");

  return (
    <>
      <Card style={{ width: "15rem" }}>
        <Card.Body>
          <Card.Title>{category}</Card.Title>
          <ListGroup>
            {options.map((element, idx) => {
              return (
                <Button
                  key={idx}
                  block
                  size="lg"
                  onClick={() => {
                    setActiveOption(element);
                    setModalShow(true);
                  }}
                >
                  {element}
                </Button>
              );
            })}

            <AdminModal
              show={bShowModal}
              onHide={() => setModalShow(false)}
              content={options}
              optionname={activeOption}
            />
          </ListGroup>
        </Card.Body>
      </Card>
    </>
  );
};

export default CategoryCard;
