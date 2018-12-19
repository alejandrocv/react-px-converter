import React from 'react';

export default ({ info }) => (
  <div className="card">
    <div className="card-header">
      Info
     </div>
    <div className="card-body">
      <p className="card-text">{info}</p>
    </div>
  </div>
);