import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import { generateMockSlots } from './generateMockSlots';
import SlotGrid from './SlotGrid';
import './App.css';

function App() {
  const [slots, setSlots] = useState([]);

  // Simulate real-time updates every 5 seconds
  useEffect(() => {
    const updateSlots = () => setSlots(generateMockSlots(24));
    updateSlots();
    const interval = setInterval(updateSlots, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <h1>🅿️ Smart Parking Admin Dashboard</h1>
      <p>Live Slot Status</p>
      <SlotGrid slots={slots} />
    </div>
  );
}

export default App;
