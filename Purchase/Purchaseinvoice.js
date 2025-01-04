import React,{useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Purchaseinvoice.css';

const Purchaseinvoice = () => {
    const [fromDate, setFromDate] = useState('');

return (
<div className="card">
    <div className="card-header"><h3>PURCHASE INVOICE</h3></div>
    <div className="card-body">
        <div className="form-group input-container" >
            <div className="row">
                <div className="col-md-3">
                    <label >Vendor/Supplier*</label>
                    <select>
                        <option>-select supplier name--</option>
                        <option>bhavani</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <label htmlFor="toDate">VoucherDate*</label>
                    <DatePicker selected={fromDate} onChange={(date) => setFromDate(date)} dateFormat="dd-MM-yyyy" placeholderText="dd-mm-yyyy" className="form-control"/>
                </div>
                <div className="col-md-3">
                    <label >Invoice No*</label>
                    <input type="text" placeholder="Invoice number"/>
                </div>
                <div className="col-md-3">
                    <label>Bar Code</label>
                    <input type="text" placeholder="Scan or enter barcode"/>
                </div>
            </div>
        </div>
        <div className="form-group">
            <div className="row">
                <div className="col-md-3">
                    <label>LR No</label>
                    <input type="text" placeholder="LR No" />
                </div>
                <div className="col-md-3">
                    <label >VoucherStatus*</label>
                    <select>
                        <option>-select status--</option>
                        <option>Delivered</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</div>
  );
};

export default Purchaseinvoice;