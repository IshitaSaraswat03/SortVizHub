import React, { useState, useEffect } from "react";
import "./Styles.css";
import Heading from "../components/Heading/Heading";
import Controls from "../components/Controls/Controls";
import { GenRandomArray } from "../components/Utils/GenRandomArray";

const BubbleSortVisualizer = () => {
  const [array, setArray] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [speed, setSpeed] = useState(500);
  const [arraySize, setArraySize] = useState(20);
  const [currentPair, setCurrentPair] = useState([-1, -1]);
  const [sortedIndices, setSortedIndices] = useState([]);

  useEffect(() => {
    resetArray();
  }, [arraySize]);

  const resetArray = () => {
    const arr = GenRandomArray(arraySize);
    setArray(arr);
    setSortedIndices([]);
  };

  const bubbleSort = async () => {
    setIsSorting(true);
    const arr = array.slice();
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        setCurrentPair([j, j + 1]);
        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          setArray(arr.slice());
          await new Promise((resolve) => setTimeout(resolve, speed));
        }
      }
      setSortedIndices((prev) => [...prev, arr.length - i - 1]);
    }
    setSortedIndices((prev) => [...prev, 0]);
    setCurrentPair([-1, -1]);
    setIsSorting(false);
  };

  return (
    <div className="visualizer-container">
      <Heading title="Bubble Sort" />
      <div className="array-container">
        {array.map((value, idx) => (
          <div className="array-bar-container" key={idx}>
            <div
              className="array-bar"
              style={{
                height: `${value * 3}px`,
                backgroundColor: sortedIndices.includes(idx)
                  ? "lightgreen"
                  : currentPair.includes(idx)
                  ? "tomato"
                  : "lightskyblue",
                width: `${600 / arraySize}px`, // Adjust width based on array size
              }}
            ></div>
            <div className="array-value">{value}</div>
          </div>
        ))}
      </div>
      <Controls
        resetArray={resetArray}
        sortAlgorithm={bubbleSort}
        isSorting={isSorting}
        speed={speed}
        setSpeed={setSpeed}
        arraySize={arraySize}
        setArraySize={setArraySize}
      />
    </div>
  );
};

export default BubbleSortVisualizer;
