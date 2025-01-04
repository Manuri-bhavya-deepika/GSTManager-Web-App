import React ,{useState} from 'react';
import './Sizeadd.css';

const Sizeadd = () => {
  const [isActive, setIsActive] = useState(false);
    const handleToggle = () => {
        setIsActive(!isActive);
    };

return (
<div className="card">
  <div className="card-header"><h3>ADD SIZE</h3></div>
  <div className="card-body">
    <div className="form-group">
      <div className="row">
        <div className="col-md-6">
          <label htmlFor="">Size*</label>
          <input type="text"  placeholder='Size'/>
        </div>
        <div className="col-md-6">
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

export default Sizeadd;