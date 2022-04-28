import './App.css';

import axios from 'axios';
import React, {useEffect, useState} from 'react';

const [countryCode, setCountryCode] = useState([]);

let getPhoneNumbers = (country, phoneNumber) => {
  console.log({country});
  console.log({phoneNumber});
  console.log({countryCode});
};

getPhoneNumbers("country", "number");

function App() {
  return (
    <div className="App">
      <p>Hello Country Codes</p>
    </div>
  );
}

export default App;
