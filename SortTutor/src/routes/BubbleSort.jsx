import React, { useState, useEffect } from "react";
import "./BubbleSort.css";

const BubbleSortVisualizer = () => {
  const [array, setArray] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [speed, setSpeed] = useState(500);
  const [arraySize, setArraySize] = useState(20);

  useEffect(() => {
    resetArray();
  }, [arraySize]);

  const resetArray = () => {
    const arr = [];
    for (let i = 0; i < arraySize; i++) {
      arr.push(Math.floor(Math.random() * 100) + 1);
    }
    setArray(arr);
  };

  const bubbleSort = async () => {
    setIsSorting(true);
    const arr = array.slice();
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          setArray(arr.slice());
          await new Promise((resolve) => setTimeout(resolve, speed));
        }
      }
    }
    setIsSorting(false);
  };

  return (
    <div className="visualizer-container">
      <div className="heading-container">
        <h2>
          Bubble Sort
          <hr
            style={{ width: "200px", border: "none", height: "1px" }}
            color="#e7e7e7"
          />
        </h2>
      </div>
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              height: `${value * 3}px`,
            }}
          >
            {value}
          </div>
        ))}
      </div>
      <div className="controls">
        <button onClick={resetArray} disabled={isSorting}>
          Generate New Array
        </button>
        <button onClick={bubbleSort} disabled={isSorting}>
          Start Bubble Sort
        </button>
        <div className="label">Speed</div>
        <input
          type="range"
          min="50"
          max="1000"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
          disabled={isSorting}
        />
        <div className="label">Array Size</div>
        <input
          type="range"
          min="5"
          max="50"
          value={arraySize}
          onChange={(e) => setArraySize(Number(e.target.value))}
          disabled={isSorting}
        />
      </div>
    </div>
  );
};

export default BubbleSortVisualizer;
