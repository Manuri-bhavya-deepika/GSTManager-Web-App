import React from 'react';
import './POS.css';

const POS = () => {
return (
<div>
    {/* First Card */}
    <div className="card"><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <div className="card-header"><h3>POINT OF SALE</h3></div>
        <div className="card-body">
            {/* Form inputs and table */}
            <div className="form-group">
                <div className="row">
                    <div className="col-md-3">
                        <label>Customer Name*</label>
                        <select>
                            <option>select name</option>
                            <option>vijay kirana store</option>
                        </select>
                    </div>
                    <div className="col-md-3">
                        <label>BillNo*</label>
                        <input type="text" placeholder="Bill No"/>
                    </div>
                    <div className="col-md-3">
                        <label>Date*</label>
                        <input type="text" placeholder="dd-mm-yy"/>
                    </div>
                    <div className="col-md-3">
                        <label>Cashier*</label>
                        <select>
                            <option>select</option>
                            <option>kiran</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <div className="row">
                    <div className="col-md-3">
                        <label>Salesman*</label>
                        <input type="text" placeholder="--Select Voucher Status--" />
                    </div>
                    <div className="col-md-3">
                        <label>Status*</label>
                        <input type="text"  placeholder="--Select Salesman--"/>
                    </div>
                    <div className="col-md-3">
                        <label>CounterNo*</label>
                        <input type="text"  placeholder="--Select Division--"/>
                    </div>
                    <div className="col-md-3">
                        <label>Bar Code</label>
                        <input type="text"  placeholder="--Select Division--"/>
                    </div>
                </div>
            </div>
            <div className="table-container">
                <table className="report-table">
                    <thead>
                        <tr>
                            <th>PRODUCT NAME</th>
                            <th>BATCH NO</th>
                            <th>QTY</th>
                            <th>FREE QTY</th>
                            <th>RATE</th>
                            <th>DISC</th>
                            <th>DISC TYPE</th>
                            <th>DISC AMT</th>
                            <th>TAX AMT</th>
                            <th>RATE INCL.TAX</th>
                            <th>GROSS AMT</th>
                            <th>NET AMT</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Table data goes here */}
                    </tbody>
                </table>
                <div className="summary-box">
                    <div className="pending-amount">
                        <label>Pending Amount: RS.0</label>
                    </div>
                    <div className="total-items">
                        <label>Total Items: Rs.0</label>
                    </div>
                    <div className="total-amount">
                        <label>Total Amount: Rs 0</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Second Card */}
    <div className="mt-4">
        <div className="card">
            <div className="card-body">
                <div className="form-group">
                    <div className="row">
                        <div className="col-md-3">
                            <label>Sub Total</label>
                            <input type="text" placeholder="00.00"/>
                        </div>
                        <div className="col-md-3">
                            <label>Bill Disc</label>
                            <input type="text" placeholder="00.00"/>
                        </div>
                        <div className="col-md-3">
                            <label>Total GST</label>
                            <input type="text" placeholder="00.00"/>
                        </div>
                        <div className="col-md-3">
                            <label>Total Amount</label>
                            <input type="text" placeholder="00.00"/>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col-md-3">
                            <label>Overall Disc</label>
                            <input type="text" placeholder="0"/>
                        </div>
                        <div className="col-md-3">
                            <label>Overall Disc Type</label>
                            <input type="text" placeholder="%"/>
                        </div>
                        <div className="col-md-3">
                            <label>Overall Disc Amount</label>
                            <input type="text" placeholder="0"/>
                        </div>
                        <div className="col-md-3">
                            <label>Final Amount</label>
                            <input type="text" placeholder="00.00"/>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col-md-3">
                            <input type="checkbox" id="whatsapp" name="whatsapp"/>
                            <label htmlFor="whatsapp">WhatsApp</label>
                        </div>
                        <div className="col-md-3">
                            <input type="checkbox" id="sms" name="sms"/>
                            <label htmlFor="sms">SMS</label>
                        </div>
                        <div className="col-md-3">
                            <input type="checkbox" id="reverseCharges" name="reverseCharges"/>
                            <label htmlFor="reverseCharges">Reverse Charges</label>
                        </div>
                        <div className="col-md-3">
                            <label>Select Print:</label>
                        <div>
                            <input type="radio" id="thermalPrint" name="printType" value="thermal"/>
                            <label htmlFor="thermalPrint">Thermal</label>
                        </div>
                        <div>
                            <input type="radio" id="a4Print" name="printType" value="a4"/>
                            <label htmlFor="a4Print">A4</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="button-container">
                        <button className="btn btn-clear">CLEAR</button>
                        <button className="btn btn-submit">SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
);
};

export default POS;