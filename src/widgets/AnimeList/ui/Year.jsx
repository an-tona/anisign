import { Slider } from '@nextui-org/slider';
import React, { useState } from 'react';

const Year = () => {

  const [years, setYears] = useState([1965, 2024]);
  const [inputValues, setInputValues] = useState([1965, 2024]);

  const handleSliderChange = (newValue) => {
    setYears(newValue);
    setInputValues(newValue);
  };


  const handleInputChange = (index, value) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);

    const newYears = [...years];
    const parsedValue = Number(value);

    if (!isNaN(parsedValue) && parsedValue >= 1965 && parsedValue <= 2024) {
      newYears[index] = parsedValue;
      if (newYears[0] <= newYears[1]) {
        setYears(newYears);
      }
    }
  };


  return (
    <div className="flex justify-between items-center gap-4">
      <input
        type="text"
        value={inputValues[0]}
        onChange={(e) => handleInputChange(0, e.target.value)}
        className="w-[70px] px-2 py-2 bg-[rgba(255,255,255,0.02)] border border-white/5 text-center text-white/80 outline-none rounded-[40px]"
      />
      <Slider
        value={years}
        maxValue={2024}
        minValue={1965}
        onChange={handleSliderChange}
        ariaLabel={['Lower thumb', 'Upper thumb']}
        step={1}
        minDistance={1}
      />
      <input
        type="text"
        value={inputValues[1]}
        onChange={(e) => handleInputChange(1, e.target.value)}
        className="w-[70px] px-2 py-2 bg-[rgba(255,255,255,0.02)] border border-white/5 text-center text-white/80 outline-none rounded-[40px]"
      />
    </div>
  )
    ;
};

export default Year;
