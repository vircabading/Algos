import logo from './logo.svg';
import './App.css';
import axios from 'axios';

let getPhoneNumbers = (country, phoneNumber) => {
  console.log({country});
  console.log({phoneNumber});
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
