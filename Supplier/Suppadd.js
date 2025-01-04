import React,{useState} from 'react';
import './Suppadd.css';

const Suppadd = () => {
  const validateMobileNumber = (event) => {
    event.target.value = event.target.value.replace(/[^\d]/g, '');
  };

  const validatePincode = (event) => {
    event.target.value = event.target.value.replace(/[^\d]/g, '');
  };

  const [isActive, setIsActive] = useState(false);
    const handleToggle = () => {
        setIsActive(!isActive);
    };

return (
<div className="card">
  <div className="card-header"><h3>ADD SUPPLIER</h3></div>
  <div className="card-body">
    <div className="form-group">
      <div className="row">
        <div className="col-md-4">
          <label htmlFor="">Supplier Name*</label>
          <input type="text"  placeholder='Name'/>
        </div>
        <div className="col-md-4">
          <label htmlFor="">Supplier Code*</label>
          <input type="text" placeholder=''/>
        </div>
        <div className="col-md-4">
          <label htmlFor="">Mobile No*</label>
          <input type="text" placeholder="Mobile No" onInput={validateMobileNumber} />
        </div>
      </div>
    </div>
        <div className="form-group">
          <div className="row">
            <div className="col-md-4">
              <label htmlFor="">Address1*</label>
              <input type="text" placeholder="Address1"/>
            </div>
            <div className="col-md-4">
              <label htmlFor="">Address2*</label>
              <input type="text" placeholder="Address2"/>
            </div>
            <div className="col-md-4">
              <label htmlFor="">Pincode*</label>
              <input type="text" placeholder="Pincode" onInput={validatePincode}/>
            </div>
          </div>
        </div>

        <div className="form-group">
          <div className="row">
            <div className="col-md-4">
              <label htmlFor="">State*</label>
              <input type="text" placeholder="State"/>
            </div>
            <div className="col-md-4">
              <label htmlFor="">City*</label>
              <input type="text" placeholder="City"/>
            </div>
            <div className="col-md-4">
              <label htmlFor="">Country*</label>
              <input type="text" placeholder="Country"/>
            </div>
          </div>
        </div>

        <div className="form-group">
          <div className="row">
            <div className="col-md-4">
              <label htmlFor="">CIN</label>
              <input type="text" placeholder="CIN"/>
            </div>
            <div className="col-md-4">
              <label htmlFor="">TIN</label>
              <input type="text" placeholder="TIN"/>
            </div>
            <div className="col-md-4">
                <label htmlFor="">Status</label>
                    <div className="toggle-switch">
                        <input type="checkbox" id="statusToggle" onChange={handleToggle} />
                        <label htmlFor="statusToggle" className="toggle">
                            <span className="toggle-text">{isActive ? 'Active' : 'Inactive'}</span>
                        </label>
                    </div>
                </div>
          </div>
        </div>
        <div className="save-button-container">
            <button className="save-button">Save</button>
        </div>
      </div>
    </div>
  );
};

export default Suppadd;