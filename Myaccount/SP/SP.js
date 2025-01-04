import React from 'react';
import './SP.css';

const SP = () => {
return (
    <div className="card">
    <div className="card-header"><h3>ADD SUFFIX/PREFIX</h3></div>
    <div className="card-body">
        <div className="form-group">
            <div className="row">
                <div className="col-md-6">
                    <label htmlFor="fromDate">Voucher Type*</label>
                    <input type="text" placeholder="Voucher Type" className="input-field"/>
                </div>
                <div className="col-md-5">
                    <label htmlFor="toDate">Sufix*</label>
                    <input type="text" placeholder="Sufix" className="input-field"/>
                </div>
            </div>
        </div>

        <div className="form-group">
            <div className="row">
                <div className="col-md-6">
                    <label htmlFor="fromDate">Prefix*</label>
                    <input type="text" placeholder="Prefix" className="input-field"/>
                </div>
                <div className="col-md-5">
                    <label htmlFor="toDate">Date*</label>
                    <input type="text" placeholder="dd-mm-yy" className="input-field"/>
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

export default SP;