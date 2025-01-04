import React,{useState} from 'react';
import './Employee.css';

const Employee = () => {
    const [isActive, setIsActive] = useState(false);
    const handleToggle = () => {
        setIsActive(!isActive);
    };

    const handleInputChange = (event) => {
        const formattedValue = event.target.value.replace(/\D/g, '');
        event.target.value = formattedValue;
    };
    

return (
 <div className="card">
    <div className="card-header"><h3>ADD EMPLOYEE</h3></div>
    <div className="card-body">
        <div className="form-group">
            <div className="row">
                <div className="col-md-4">
                    <label htmlFor="fromDate">Employee Code*</label>
                    <input type="text"/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="toDate">Employee Name*</label>
                    <input type="text" placeholder="Employee Name"/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="designation">Designation*</label>
                    <select id="designation" className="large-input">
                        <option value="">--Select Designation--</option>
                        <option value="cashier">Cashier</option>
                        <option value="salesman">Salesman</option>
                    </select>
                </div>
            </div>
        </div>

        <div className="form-group">
            <div className="row">
                <div className="col-md-4">
                    <label htmlFor="toDate">Joining Date*</label>
                    <input type="text" placeholder="dd-mm-yy"/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="fromDate">Termination Date</label>
                    <input type="text" placeholder="dd-mm-yy"/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="toDate">Address1*</label>
                    <input type="text" placeholder="Address1"/>
                </div>
            </div>
        </div>
        <div className="form-group">
            <div className="row">
                <div className="col-md-4">
                    <label htmlFor="fromDate">Address2</label>
                    <input type="text" placeholder="Address2"/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="mobileNumber">Mobile Number*</label>
                    <input type="text" name="mobileNumber" id="mobileNumber" placeholder="MobileNo" onChange={handleInputChange} maxLength={10} />
                </div>
                <div className="col-md-4">
                    <label htmlFor="alternateNumber">Alternative Number</label>
                    <input type="text" name="alternateNumber" id="alternateNumber" placeholder="Alternative Number" onChange={handleInputChange} maxLength={10}/>
                </div>
            </div>
        </div>
        <div className="form-group">
            <div className="row">
            <div className="col-md-4">
                    <label htmlFor="">Status</label>
                    <div className="toggle-switch">
                        <input type="checkbox" id="statusToggle" onChange={handleToggle} />
                        <label htmlFor="statusToggle" className="toggle">
                            <span className="toggle-text">{isActive ? 'Active' : 'Inactive'}</span>
                        </label>
                    </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="">Default</label>
                    <div className="toggle-switch">
                        <input type="checkbox" id="statusToggle" onChange={handleToggle} />
                        <label htmlFor="statusToggle" className="toggle">
                            <span className="toggle-text">{isActive ? 'Active' : 'Inactive'}</span>
                        </label>
                    </div>
                </div>
            </div>
            <div className="save-button-container">
            <button className="save-button">Save</button>
        </div>
        <div className="designation-list">
            <h3>EMPLOYEE LIST</h3>
            <table>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>EMPLOYEE NAME</th>
                        <th>EMPLOYEE CODE</th>
                        <th>DESIGNATION</th>
                        <th>JOINING DATE</th>
                        <th>TERMINATION DATE</th>
                        <th>ADDRESS</th>
                    </tr>
                </thead>
            <tbody>
                {/* Table data goes here */}
            </tbody>
        </table>
    </div>
        </div>
    </div>
</div>
  );
};

export default Employee;