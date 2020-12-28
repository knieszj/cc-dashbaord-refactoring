import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./CardModal.css";

const CardModal = (props) => {
  const flightData = props.content.filter((element) => {
    return element.flightName === props.flightname;
  });

  const getValidFlightData = () =>
    flightData[0] === undefined
      ? { flightData: {result: []}, flightName: "" }
      : flightData[0];
  console.log();
  
  const getCurrentAnalytics = () => {
    let out = {
      current: 0,
      notCurrent: 0,
      overdue: 0
    }
    const fd = getValidFlightData();
    
    if (getValidFlightData().flightData.result.length > 0) {
      fd.flightData.result.forEach(element => {
        if (Object.values(element.airmanData).indexOf("overdue") > -1) {
          out.overdue += 1;
        } else if (Object.values(element.airmanData).indexOf("not current") > -1) { 
          out.notCurrent += 1;
        } else {
          out.current += 1;
        }
      });
    }

    return out;
  }
  
  const setStatusColor = (category) => {
    console.log(flightData);
    if (!category) {
      console.log(' No entry found for this category! >:( ');
      return;
    }
    let newClassName = category.toLowerCase().trim();
    newClassName = newClassName.replace(' ', '-');
    return newClassName;
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="displayed-card">
          <h1>{getValidFlightData().flightName}</h1>
          <h3>Current: {getCurrentAnalytics().current} Not Current: {getCurrentAnalytics().notCurrent} Overdue: {getCurrentAnalytics().overdue}</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <table className="table">
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Evaluation</th>
              <th scope="col">ADLS</th>
              <th scope="col">PT</th>
              <th scope="col">Medical</th>
            </tr>
            <tbody>
              {flightData[0] !== undefined ? (
                flightData[0].flightData.result.map((element, idx) => {
                  return (
                    <tr key={Math.floor(Math.random() * idx)}>
                      <th scope="row">{idx + 1}</th>
                      <td>{element.airmanData.firstName}</td>
                      <td>{element.airmanData.lastName}</td>
                      <td className={`${setStatusColor(element.airmanData.evaluation)}`}>{element.airmanData.evaluation}</td>
                      <td className={`${setStatusColor(element.airmanData.adls)}`}>{element.airmanData.adls}</td>
                      <td className={`${setStatusColor(element.airmanData.pt)}`}>{element.airmanData.pt}</td>
                      <td className={`${setStatusColor(element.airmanData.medical)}`}>{element.airmanData.medical}</td>
                    </tr>
                  );
                })
              ) : (
                <h1>false</h1>
              )}
            </tbody>
        </table>
      </Modal.Body>
      <Modal.Footer>
        <Button block size="lg" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CardModal;
