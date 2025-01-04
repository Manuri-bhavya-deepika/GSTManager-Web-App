import React from 'react';
import './Rlist.css';

const Rlist = () => {
  return (
    <div className="card">
      <div className="designation-list">
        <h3>RECEIPTS LIST</h3>
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>CUSTOMER NAME</th>
              <th>PAYMENT AMOUNT</th>
              <th>PAYMENT MODE</th>
              <th>PAYMENT DATE</th>
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

export default Rlist;
