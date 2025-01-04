import React from 'react';
import './Blist.css';

const Blist = () => {
  return (
    <div className="card">
      <div className="designation-list">
        <h3>Brand LIST</h3>
        <table>
          <thead>
            <tr>
              <th>S.NO</th>
              <th>BRAND NAME</th>
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

export default Blist;