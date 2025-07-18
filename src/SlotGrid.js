import React from 'react';
import Slot from './Slot';

const SlotGrid = ({ slots, onSelect, selected }) => (
 <div className="slot-grid">
  {slots.map((slot, index) => (
   <Slot
    key={index}
    number={index + 1}
    status={slot.status}
    isSelected={selected.includes(index)}
    onClick={() => onSelect(index)}
   />
  ))}
 </div>
);

export default SlotGrid;
