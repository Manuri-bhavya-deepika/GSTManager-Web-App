import React ,{useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Transferinventory.css';

const Transferinventory = () => {
    const [selectedDate, setSelectedDate] = useState(null);

return (
<div className="card">
    <div className="card-header"><h3>TRANSFER INVENTORY</h3></div>
    <div className="card-body">
        <div className="form-group">
            <div className="row">
                <div className="col-md-6">
                    <label htmlFor="from-division">From Division</label>
                    <select id="from-division" name="from-division">
                        <option value="">--Select Division Name--</option>
                        <option value="rajahmundry">Rajahmundry Branch</option>
                    </select>
                </div>
                <div className="col-md-5">
                    <label htmlFor="product-name">Product Name</label>
                    <select id="product-name" name="product-name">
                        <option value="">--Select Product Name--</option>
                    </select>
                </div>
            </div>
        </div>
        <div className="form-group">
            <div className="row">
                <div className="col-md-6">
                    <label htmlFor="to-division">To Division</label>
                    <select id="to-division" name="to-division">
                        <option value="">--Select Division Name--</option>
                        <option value="rajahmundry">Rajahmundry Branch</option>
                    </select>
                </div>
                <div className="col-md-5">
                    <label htmlFor="product-name">Product Name</label>
                    <select id="product-name" name="product-name">
                        <option value="">--Select Product Name--</option>
                    </select>
                </div>
            </div>
        </div>
        <div className="form-group">
            <div className="row">
                <div className="col-md-6">
                    <label htmlFor="date">Date</label>
                    <DatePicker id="date" selected={selectedDate} onChange={date => setSelectedDate(date)} dateFormat="dd-mm-yyyy" placeholderText="dd-mm-yyyy"/>
                </div>
                <div className="col-md-5">
                    <label htmlFor="">Qty</label>
                    <input type="text" placeholder="Qty"/>
                </div>
            </div>
        </div><br/><br/>
        <div className="save-button-container">
            <button className="save-button">Transfer</button>
        </div><br/><br/>
        <div className="designation-list">
            <h3>TRANSFER LIST</h3>
            <table>
                <thead>
                    <tr>
                        <th>S.NO</th>
                        <th>DATE</th>
                        <th>FROM DIVISION</th>
                        <th>TO DIVISION</th>
                        <th>PRODUCT NAME</th>
                        <th>QUANTITY</th>
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

export default Transferinventory;