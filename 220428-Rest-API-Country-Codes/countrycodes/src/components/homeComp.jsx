import React, { useEffect, useState } from 'react';
import axios from 'axios';

//////////////////////////
//  Home Component

const HomeComp = () => {
    let [countryCode, setCountryCode] = useState([]);
    const [fullPhoneNumber, setfullPhoneNumber] = useState("")

    const getPhoneNumbers = (country, phoneNumber) => {
        // Get info from API using country name
        axios.get("https://jsonmock.hackerrank.com/api/countries?name=" + country)
            .then(res => {
                // Retrieve the array of calling Codes
                let callingCodes = res.data.data[0].callingCodes
                setCountryCode(callingCodes);


                let thisCountryCode = -1;
                // Get the highest indexed Country Code
                if (callingCodes.length > 0) {
                    thisCountryCode = callingCodes[callingCodes.length - 1];
                }

                // Format the final phone number
                let output = "+" + thisCountryCode + " " + phoneNumber;
                console.log({ output });
                setfullPhoneNumber(output);
            })
    };

    useEffect(() => {
        getPhoneNumbers("Vietnam", "123-4567");
    }, []);

    return (
        <div>
            <h2>Home Component</h2>
            <p>Country Code: {countryCode}</p>
            <p>Full Phone Number: {fullPhoneNumber}</p>
        </div>
    )
}

export default HomeComp