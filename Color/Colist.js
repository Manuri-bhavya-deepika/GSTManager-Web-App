import React from 'react';
import './Colist.css';

const Clist = () => {
  return (
    <div className="card">
      <div className="designation-list">
        <h3>Color LIST</h3>
        <table>
          <thead>
            <tr>
              <th>S.NO</th>
              <th>COLOR NAME</th>
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