import React from 'react';
import './Paymentlist.css';

const Paymentlist = () => {
  return (
    <div className="card">
      <div className="designation-list">
        <h3>PAYMENTS LIST</h3>
        <table>
          <thead>
            <tr>
              <th>S.NO</th>
              <th>CUSTOMER NAME</th>
              <th>SUPPLIER NAME</th>
              <th>PAYMENT DATE</th>
              <th>PAYMENT AMOUNT</th>
              <th>PAYMENT MODE</th>
              <th>ACTIONS</th>
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

export default Paymentlist;