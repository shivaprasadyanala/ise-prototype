import React, { useEffect, useState } from 'react';
import SlotGrid from './SlotGrid';
import './App.css';
import { generateMockSlots } from './generateMockSlots';

function App() {
  const [slots, setSlots] = useState([]);
  const [selectedSlots, setSelectedSlots] = useState([]);

  useEffect(() => {
    setSlots(generateMockSlots(24));
  }, []);

  const handleSelect = (index) => {
    const slot = slots[index];
    if (slot.status !== 'available') return;

    setSelectedSlots(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const handleReserve = () => {
    const newSlots = [...slots];
    selectedSlots.forEach(index => {
      newSlots[index].status = 'reserved';
    });
    setSlots(newSlots);
    setSelectedSlots([]);
  };

  return (
    <div className="App">
      <h1>🅿️ Smart Parking Admin Dashboard</h1>
      <p>Select multiple <strong>available</strong> slots to reserve.</p>
      <SlotGrid slots={slots} onSelect={handleSelect} selected={selectedSlots} />
      {selectedSlots.length > 0 && (
        <button className="reserve-button" onClick={handleReserve}>
          Reserve Selected ({selectedSlots.length})
        </button>
      )}
    </div>
  );
}

export default App;
