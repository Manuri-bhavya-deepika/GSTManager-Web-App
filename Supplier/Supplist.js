import React from 'react';
import './Supplist.css';

const Supplist = () => {
  return (
    <div className="card">
      <div className="designation-list">
        <h3>SUPLLIERS LIST</h3>
        <table>
          <thead>
            <tr>
              <th>S.NO</th>
              <th>SUPPLIER NAME</th>
              <th>SUPPLIER CODE</th>
              <th>MOBILE NUMBER</th>
              <th>STATE</th>
              <th>STATUS</th>
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

export default Supplist;