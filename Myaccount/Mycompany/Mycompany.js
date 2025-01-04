import React ,{useState} from 'react';
import './Mycompany.css';

const Mycompany = () => {
  const [name, setName] = useState("Bhavya");
  const handleNameChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue.toLowerCase() === "bhavya") {
      setName(inputValue);
    }
  };

  const [email, setEmail] = useState("abc@gmail.com");
  const handleEmailChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue === "abc@gmail.com") {
      setEmail(inputValue);
    }
  };

  const [mobileNumber, setMobileNumber] = useState("1234567890");
  const handleMobileNumberChange = (event) => {
    const inputValue = event.target.value;
    const onlyDigits = /^\d*$/;
    if (onlyDigits.test(inputValue) && inputValue.length <= 10) {
      setMobileNumber(inputValue);
    }
  };

  const [address, setAddress] = useState("rajahmundry");
  const [city, setCity] = useState("rajahmundry");
  const handleAddressChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue.toLowerCase() === "rajahmundry") {
      setAddress(inputValue);
    }
  };
  const handleCityChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue.toLowerCase() === "rajahmundry") {
      setCity(inputValue);
    }
  };

  const [country, setCountry] = useState("India");
  const [state, setState] = useState("Andhra Pradesh");
  const handleCountryChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue.toLowerCase() === "india") {
      setCountry(inputValue);
    }
  };
  const handleStateChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue.toLowerCase() === "andhra pradesh") {
      setState(inputValue);
    }
  };

  const [companyName, setCompanyName] = useState("Bhavya");
  const handleCompanyNameChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue.toLowerCase() === "bhavya") {
      setCompanyName(inputValue);
    }
  };

  const [gstin, setGstin] = useState("37AZDTS5421A1Z6");
  const handleGstinChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue.toLowerCase() === "37azdts5421a1z6") {
      setGstin(inputValue);
    }
  };

  const [postalCode, setPostalCode] = useState("");
  const validPostalCode = "533107";
  const handlePostalCodeChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue === validPostalCode) {
      setPostalCode(inputValue);
    }
  };

  const [userName, setUserName] = useState("");
  const validUserName = "Bhavya";
  const handleUserNameChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue.toLowerCase() === validUserName.toLowerCase()) {
      setUserName(inputValue);
    }
  };


  return (
    <div className="card">
      <div className="card-header"><h3>VIEW TENANT PROFILE</h3></div>
      <div className="card-body">
        <div className="form-group">
          <div className="row">
            <div className="col-md-3">
              <label htmlFor="Name">Name</label>
              <input type="text" value={name} onChange={handleNameChange} className="large-input"/>
            </div>
            <div className="col-md-3">
              <label htmlFor="Email">Email</label>
              <input type="text" value={email} onChange={handleEmailChange} className="large-input"  />
            </div>
            <div className="col-md-3">
              <label htmlFor="Mobileno">MobileNo</label>
              <input type="text" value={mobileNumber} onChange={handleMobileNumberChange} className="large-input"/>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="row">
            <div className="col-md-3">
              <label htmlFor="Address">Address</label>
              <input type="text" value={address} onChange={handleAddressChange}  placeholder="Address" className="large-input"/>
            </div>
            <div className="col-md-3">
              <label htmlFor="city">City</label>
              <input type="text" value={city} onChange={handleCityChange} placeholder="city" className="large-input"   />
            </div>
            <div className="col-md-3">
              <label htmlFor="country">Country</label>
              <input type="text" value={country} onChange={handleCountryChange} placeholder="country" className="large-input"/>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="row">
            <div className="col-md-3">
              <label htmlFor="state">State</label>
              <input type="text" value={state} onChange={handleStateChange} placeholder="state" className="large-input" />
            </div>
            <div className="col-md-3">
              <label htmlFor="cname">Company Name</label>
              <input type="text" value={companyName} onChange={handleCompanyNameChange} placeholder="company name" className="large-input" />
            </div>
            <div className="col-md-3">
              <label htmlFor="gst">GSTIN</label>
              <input type="text" value={gstin} onChange={handleGstinChange} placeholder="GSTIN" className="large-input" />
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="row">
            <div className="col-md-3">
              <label htmlFor="code">PostalCode</label>
              <input type="text" value={postalCode} onChange={handlePostalCodeChange}  placeholder="postal code" className="large-input"/>
            </div>
            <div className="col-md-3">
              <label htmlFor="name">User Name*</label>
              <input type="text" value={userName} onChange={handleUserNameChange} placeholder="Bhavya"  className="large-input"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mycompany;
