import React, {useEffect, useState} from 'react';
import axios from 'axios';

const homeComp = () => {
    const [countryCode, setCountryCode] = useState([]);

    const getPhoneNumbers = (country, phoneNumber) => {
        console.log({ country });
        console.log({ phoneNumber });
        console.log({ countryCode });
    };

    getPhoneNumbers("country", "number");

    return (
        <div>Home Component</div>
    )
}

export default homeComp