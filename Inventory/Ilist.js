import React from 'react';
import './Ilist.css';

const Ilist = () => {
return (
<div className="card">
    <div className="card-header"><h3>LIST INVENTORY</h3></div>
    <div className="card-body">
        <div className="form-group">
            <div className="row">
                <div className="col-md-6">
                    <label htmlFor="product-division">Product division*</label>
                    <select id="product-division" name="product-division">
                        <option value="">--Product division--</option>
                        <option value="rajahmundry">Rajahmundry Branch</option>
                    </select>
                </div>
                <div className="col-md-5">
                    <label htmlFor="product-category">Product Category*</label>
                    <select id="product-category" name="product-category">
                        <option value="">--Select Product Category--</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
    <div className="card-body">
        <table>
            <thead>
                <tr>
                    <th>S.NO</th>
                    <th>PRODUCT NAME</th>
                    <th>STOCK AVAILABLE</th>
                </tr>
            </thead>
            <tbody>
                {/* Table data goes here */}
            </tbody>
        </table>
    </div>
</div>
  );
};

export default Ilist;