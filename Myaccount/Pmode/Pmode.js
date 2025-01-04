import React,{useState} from 'react';
import './Pmode.css';

const Pmode = () => {
    const [isActive, setIsActive] = useState(false);
    const handleToggle = () => {
        setIsActive(!isActive);
    };

return (
<div className="card">
    <div className="card-header"><h3>ADD PAYMENT MODE</h3></div>
    <div className="card-body">
        <div className="form-group">
            <div className="row">
                <div className="col-md-6">
                    <label htmlFor="fromDate">Payment Mode Name*</label>
                    <input type="text" placeholder="Payment Mode"/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="toDate">Status</label><br/>
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
            <h3>PAYMENTMODE LIST</h3>
            <table>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Payment Mode</th>
                        <th>Status</th>
                        <th>Action</th>
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

export default Pmode;