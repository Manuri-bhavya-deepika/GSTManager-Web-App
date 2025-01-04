import React from 'react';
import './SPL.css';

const SPL = () => {
return (
<div className="card">
    <div className="card-header"><h3>SUFFIX/PREFIX SUMMARY</h3></div>
    <div className="card-body">
        <div className="form-group">
            <div className="row">
                <div className="col-md-6">
                    <label htmlFor="fromDate">From Date*</label>
                    <input type="date"  placeholder='dd-mm-yyyy'/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="toDate">To Date*</label>
                    <input type="date"  placeholder='dd-mm-yyyy'/>
                </div>
            </div>
        </div>
        <div className="search-button">
            <button>Search</button>
        </div>
        <div className="designation-list">
            <h3>SUFFIX/PEFIX LIST</h3>
            <table>
                <thead>
                    <tr>
                        <th>S.NO</th>
                        <th>VOUCHER TYPE</th>
                        <th>DATE</th>
                        <th>SUFFIX</th>
                        <th>PREFIX</th>
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

export default SPL;