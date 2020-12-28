import React, {useState} from "react";
import {forEach} from "react-bootstrap/ElementChildren";
import {renderedDive} from "enzyme/src/Utils";
//refactored out FlightList since it is being pulled/filtered out of the sqdAdminStatus property/state
//removing bootstrap

const CategoryCard = ({category, sqdAdminInfo}) => {
    const arrayOfFlights = [];
    const readinessStatus = [];
    const flightMapping = () => sqdAdminInfo.map(data => arrayOfFlights.includes(data.flight_name) ? null : arrayOfFlights.push(data.flight_name))
    flightMapping()
    const determineAirmenReadinessByFlight = () => {
        for (let i = 0; i < arrayOfFlights.length; i++) {
            sqdAdminInfo.forEach(individual => {
                if (individual.flight_name === arrayOfFlights[i]) {
                    if (readinessStatus[i] === undefined) {
                        readinessStatus[i] = individual[category]
                    } else {
                        readinessStatus[i] *= individual[category]
                    }
                }
            })
        }
    }
    determineAirmenReadinessByFlight()



    const flightConditionalReadiness = (num) => {
        return readinessStatus[num] ? `green` : `red`
    }
    const mapFlights = arrayOfFlights.map(flight => {
        console.log('indexOfStuff', arrayOfFlights.indexOf(flight), readinessStatus[arrayOfFlights.indexOf(flight)])
        return (
            <div style={{backgroundColor: `${flightConditionalReadiness(arrayOfFlights.indexOf(flight))}`}}>
                {flight}
            </div>

        )
    })



    // const conditionalColor = readinessStatus ? `green` : `red`;
    const conditionalColor = readinessStatus.reduce((acc,cur) => acc *= cur) ? `green` : `red`

    console.log('testing', arrayOfFlights, readinessStatus, category)
    return (
        <div>
            <div style={{backgroundColor: `${conditionalColor}`}}>
                {category}
            </div>
            <div>
                {mapFlights}
            </div>
        </div>
    );
};

export default CategoryCard;
