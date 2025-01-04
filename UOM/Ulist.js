import React,{useState} from 'react';
import './Ulist.css';

const Ulist = () => {
  return (
    <div className="card">
      <div className="designation-list">
        <h3>UOM LIST</h3>
        <table>
          <thead>
            <tr>
              <th>S.NO</th>
              <th>UNIT</th>
              <th>PARENT UNIT</th>
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

export default Ulist;