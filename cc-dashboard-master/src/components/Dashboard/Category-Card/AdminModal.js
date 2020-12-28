import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const AdminModal = (props) => {
  const [airmanId, setAirmanId] = useState("");
  const [flightId, setFlightId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [pt, setPT] = useState("Current");
  const [evaluation, setEval] = useState("Current");
  const [adls, setADLS] = useState("Current");
  const [medical, setMedical] = useState("Current");

  const createUrl = () => {
    const key = props.optionname.toLowerCase();
    console.log(key);
    if (props.optionname === "Add") {
      return `https://us-central1-cc-dashboard-afb15.cloudfunctions.net/${key}Airman/${flightId}/`;
    } else {
      return `https://us-central1-cc-dashboard-afb15.cloudfunctions.net/${key}Airman/${flightId}/${airmanId}`;
    }
  };

  const getMethod = () => {
    switch (props.optionname) {
      case "Add":    return "POST";
      case "Remove": return "DELETE";
      case "Update": return "PUT";

      default: return "bad-option";
    }
  };

  const getBody = () => {
    return props.optionname !== "Remove"
      ? {
          method: getMethod(),
          mode: "cors",
          accept: "*/*",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            adls: adls,
            pt: pt,
            medical: medical,
            evaluation: evaluation,
          }),
        }
      : {
          method: getMethod(),
          mode: "cors",
          accept: "*/*",
        };
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="displayed-card">
          <h1>{props.optionname}</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          onSubmit={async (e) => {
            e.preventDefault();
            const response = await fetch(createUrl(), getBody());
            const data = await response.json();
            console.log(data);
          }}
        >
          <Form.Group size="lg" controlId="text-inputs">
            {props.optionname !== "Add" && <Form.Label>Airman ID</Form.Label>}
            {props.optionname !== "Add" && (
              <Form.Control
                autoFocus
                type="text"
                value={airmanId}
                onChange={(event) => setAirmanId(event.target.value)}
              />
            )}
            {props.optionname !== "Remove" && (
              <Form.Label>First Name</Form.Label>
            )}
            {props.optionname !== "Remove" && (
              <Form.Control
                autoFocus
                type="text"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
              />
            )}
            {props.optionname !== "Remove" && (
              <Form.Label>Last Name</Form.Label>
            )}
            {props.optionname !== "Remove" && (
              <Form.Control
                autoFocus
                type="text"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
              />
            )}
            {props.optionname !== "Remove" && <Form.Label>Flight</Form.Label>}
            {props.optionname !== "Remove" && (
              <Form.Control
                autoFocus
                type="text"
                value={flightId}
                onChange={(event) => setFlightId(event.target.value)}
              />
            )}
          </Form.Group>
          <Form.Group>
            {props.optionname !== "Remove" && (
              <Form.Label htmlFor="pt-select">PT</Form.Label>
            )}
            {props.optionname !== "Remove" && (
              <select
                className="form-control"
                id="pt-select"
                value={pt}
                onChange={(e) => setPT(e.target.value)}
              >
                <option value="Current">Current</option>
                <option value="Not Current">Not Current</option>
                <option value="Overdue">Overdue</option>
              </select>
            )}
            {props.optionname !== "Remove" && (
              <Form.Label htmlFor="eval-select">Evaluation</Form.Label>
            )}
            {props.optionname !== "Remove" && (
              <select
                className="form-control"
                id="eval-select"
                value={evaluation}
                onChange={(e) => setEval(e.target.value)}
              >
                <option value="Current">Current</option>
                <option value="Not Current">Not Current</option>
                <option value="Overdue">Overdue</option>
              </select>
            )}
            {props.optionname !== "Remove" && (
              <Form.Label htmlFor="adls-select">ADLS</Form.Label>
            )}
            {props.optionname !== "Remove" && (
              <select
                className="form-control"
                id="adls-select"
                value={adls}
                onChange={(e) => setADLS(e.target.value)}
              >
                <option value="Current">Current</option>
                <option value="Not Current">Not Current</option>
                <option value="Overdue">Overdue</option>
              </select>
            )}
            {props.optionname !== "Remove" && (
              <Form.Label htmlFor="med-select">Medical</Form.Label>
            )}
            {props.optionname !== "Remove" && (
              <select
                className="form-control"
                id="med-select"
                value={medical}
                onChange={(e) => setMedical(e.target.value)}
              >
                <option value="Current">Current</option>
                <option value="Not Current">Not Current</option>
                <option value="Overdue">Overdue</option>
              </select>
            )}
          </Form.Group>
          <Button block size="lg" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AdminModal;
