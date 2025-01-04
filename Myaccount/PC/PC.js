import React,{useState} from 'react';
import './PC.css';

const PC = () => {
    const handleMobileNumberChange = (e) => {
        const inputValue = e.target.value;
        const numericValue = inputValue.replace(/\D/g, '');
        e.target.value = numericValue;
    };

    const [isActive, setIsActive] = useState(false);
    const handleToggle = () => {
        setIsActive(!isActive);
    };


return (
<div className="card">
    <div className="card-header"><h3>ADD PARTY/CUSTOMERS</h3></div>
    <div className="card-body">
        <div className="form-group">
            <div className="row">
                <div className="col-md-6">
                    <label htmlFor="">Party/Customer Name</label>
                    <input type="text" placeholder="Name"/>
                </div>
                <div className="col-md-5">
                    <label htmlFor="">Address</label>
                    <input type="text" placeholder="Address"/>
                </div>
            </div>
        </div>

        <div className="form-group">
            <div className="row">
                <div className="col-md-6">
                    <label htmlFor="">City</label>
                    <input type="text" placeholder="City"/>
                </div>
                <div className="col-md-5">
                    <label htmlFor="toDate">State*</label>
                    <input type="text" placeholder="State"/>
                </div>
            </div>
        </div>

        <div className="form-group">
            <div className="row">
                <div className="col-md-6">
                    <label htmlFor="fromDate">Mobile Number</label>
                    <input type="text" onChange={handleMobileNumberChange} placeholder="Mobile Number"/>
                </div>
                <div className="col-md-5">
                    <label htmlFor="toDate">GST No</label>
                    <input type="text" placeholder="GST No"/>
                </div>
            </div>
        </div>

        <div className="form-group">
            <div className="row">
                <div className="col-md-6">
                <label htmlFor="">Default</label>
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
        <div className="designation-list">
            <h3>PARTY/CUSTOMERS LIST</h3>
            <table>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>PARTY/CUSTOMER NAME</th>
                        <th>STATE</th>
                        <th>ADDRESS</th>
                        <th>GSTIN</th>
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

export default PC;