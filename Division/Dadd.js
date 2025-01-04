import React from 'react';
import './Dadd.css';

const Dadd = () => {
return (
<div className="card">
  <div className="card-header"><h3>ADD DIVISION</h3></div>
  <div className="card-body">
    <div className="form-group">
      <div className="row">
        <div className="col-md-6">
          <label htmlFor="">Division Name*</label>
          <input type="text"  placeholder='Division Name'/>
        </div>
        <div className="col-md-5">
          <label htmlFor="">Division Code*</label>
          <input type="text" placeholder=''/>
        </div>
      </div>
    </div>
    <div className="form-group">
      <div className="row">
        <div className="col-md-6">
          <label htmlFor="">Address*</label>
          <input type="text"  placeholder='Address'/>
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

export default Dadd;