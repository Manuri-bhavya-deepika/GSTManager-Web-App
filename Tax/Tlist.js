import React from 'react';
import './Tlist.css';

const Tlist = () => {
  return (
    <div className="card">
      <div className="designation-list">
        <h3>TAX LIST</h3>
        <table>
          <thead>
            <tr>
              <th>S.NO</th>
              <th>TAX NAME</th>
              <th>VALUE</th>
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

export default Tlist;