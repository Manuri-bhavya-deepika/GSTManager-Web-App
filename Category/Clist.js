import React from 'react';
import './Clist.css';

const Clist = () => {
  return (
    <div className="card">
      <div className="designation-list">
        <h3>CATEGORY LIST</h3>
        <table>
          <thead>
            <tr>
              <th>S.NO</th>
              <th>CATEGORY NAME</th>
              <th>DIVISION NAME</th>
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

export default Clist;