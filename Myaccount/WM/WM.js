import React from 'react';
import './WM.css';

const WM = () => {
return (
<div className="card">
    <div className="card-header"><h3>ADD Whatsapp Integration Details</h3></div>
    <div className="card-body">
        <div className="form-group">
            <div className="row">
            <div className="col-md-6">
                <label htmlFor="">Notification-Type*</label>
                <select defaultValue="--Select Notification Type--" className="large-input">
                    <option disabled>--Select Notification Type--</option>
                    <option>Email</option>
                    <option>SMS</option>
                    <option>WhatsApp</option>
                </select>
            </div>
            <div className="col-md-5">
                <label htmlFor="">Provider Type*</label>
                <select defaultValue="--Select Provider Type--" className="large-input">
                    <option disabled>--Select Provider Type--</option>
                    <option>MSG91</option>
                    <option>Tedlance WhatsApp API</option>
                </select>
            </div>
        </div>
    </div>
        <div className="form-group">
            <div className="row">
                <div className="col-md-6">
                    <label>Name*</label>
                    <input type="text" placeholder="Name" className="custom-input"/>
                </div>
                <div className="col-md-5">
                    <label>Settings*</label>
                    <input type="text" placeholder="Setting" className="custom-input"/>
                </div>
            </div>
        </div>
        <div className="search-button">
            <button>Search</button>
        </div>
        <div className="designation-list">
            <h3>NOTIFICATION LIST</h3>
            <table>
                <thead>
                    <tr>
                        <th>S.NO</th>
                        <th>NAME</th>
                        <th>STATUS</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
            <tbody>
                {/* Table data goes here */}
            </tbody>
        </table>
    </div>
    </div>
</div>
  );
};

export default WM;