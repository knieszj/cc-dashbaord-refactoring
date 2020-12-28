import React, {useState} from "react";
//refactored out FlightList since it is being pulled/filtered out of the sqdAdminStatus property/state
//removing bootstrap

const CategoryCard = ({ category, sqdAdminInfo }) => {

    return (
        <div>
            <div>
                {category}
            </div>
            <div>

            </div>
        </div>
    );
};

export default CategoryCard;
