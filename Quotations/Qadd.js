import React from 'react';
import './Qadd.css';

const Qadd = () => {
return (
<div>
    {/* First Card */}
    <div className="card"><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <div className="card-header"><h3>ADD QUOTATIONS</h3></div>
        <div className="card-body">
            {/* Form inputs and table */}
            <div className="form-group">
                <div className="row">
                    <div className="col-md-3">
                        <label htmlFor="toDate">Party Name*</label>
                        <input type="text" placeholder="--Select Party Name--"/>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="toDate">Voucher No*</label>
                        <input type="text" placeholder="Voucher No"/>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="toDate">Voucher Date*</label>
                        <input type="text" placeholder="24-04-2024"/>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="toDate">Validity*</label>
                        <input type="text" placeholder="Validity"/>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <div className="row">
                    <div className="col-md-3">
                        <label htmlFor="counterNumber">Voucher Status*</label>
                        <input type="text" placeholder="--Select Voucher Status--" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="cashierName">Salesman*</label>
                        <input type="text"  placeholder="--Select Salesman--"/>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="cashierName">Division Name*</label>
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
                <br/>
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
                            <div className="inline-checkbox">
                                <input type="checkbox" id="whatsapp" name="whatsapp" />
                                <label htmlFor="whatsapp">WhatsApp</label>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="inline-checkbox">
                                <input type="checkbox" id="sms" name="sms" />
                                <label htmlFor="sms">SMS</label>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="inline-checkbox">
                                <input type="checkbox" id="reverseCharges" name="reverseCharges" />
                                <label htmlFor="reverseCharges">Reverse Charges</label>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <label>Select Print:</label>
                            <div className="inline-radio">
                                <input type="radio" id="thermalPrint" name="printType" value="thermal" />
                                <label htmlFor="thermalPrint">Thermal</label>
                            </div>
                            <div className="inline-radio">
                                <input type="radio" id="a4Print" name="printType" value="a4" />
                                <label htmlFor="a4Print">A4</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/* CLEAR and SUBMIT BUTTONS */}
        <div className="form-group">
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
</div>
    );
};

export default Qadd;