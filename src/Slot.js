import React from 'react';

const Slot = ({ number, status, isSelected, onClick }) => {
 const statusColor = {
  available: 'green',
  occupied: 'red',
  reserved: 'blue',
  offline: 'gray'
 };

 const border = isSelected ? '4px solid yellow' : 'none';

 return (
  <div
   className="slot"
   style={{
    backgroundColor: statusColor[status],
    border: border
   }}
   onClick={onClick}
  >
   S{number}
   <br />
   <small>{status.toUpperCase()}</small>
  </div>
 );
};

export default Slot;
