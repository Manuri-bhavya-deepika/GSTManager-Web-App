import React from 'react';
import './Sizelist.css';

const Sizelist = () => {
  return (
    <div className="card">
      <div className="designation-list">
        <h3>Size LIST</h3>
        <table>
          <thead>
            <tr>
              <th>S.NO</th>
              <th>SIZE</th>
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

export default Sizelist;