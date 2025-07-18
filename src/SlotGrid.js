import React from 'react';
import Slot from './Slot';
import './App.css';

const SlotGrid = ({ slots }) => (
 <div className="slot-grid">
  {slots.map((slot, index) => (
   <Slot key={index} number={index + 1} status={slot.status} />
  ))}
 </div>
);

export default SlotGrid;