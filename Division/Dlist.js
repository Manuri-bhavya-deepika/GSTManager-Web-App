import React from 'react';
import './Dlist.css';

const Dlist = () => {
  return (
    <div className="card">
      <div className="designation-list">
        <h3>DIVISIONS LIST</h3>
        <table>
          <thead>
            <tr>
              <th>S.NO</th>
              <th>DIVISION NAME</th>
              <th>DIVISION CODE</th>
              <th>ADDRESS</th>
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

export default Dlist;