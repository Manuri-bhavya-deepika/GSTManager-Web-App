import React from 'react';
import './Plist.css';

const Plist = () => {
  return (
    <div className="card">
      <div className="designation-list">
        <h3>PRODUCTS LIST</h3>
        <table>
          <thead>
            <tr>
              <th>S.NO</th>
              <th>SUPPLIER NAME</th>
              <th>PRODUCT NAME</th>
              <th>CATEGORY NAME</th>
              <th>HSN CODE</th>
              <th>PRODUCT CODE</th>
              <th>UOM</th>
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

export default Plist;