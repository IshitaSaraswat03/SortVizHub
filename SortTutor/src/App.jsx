import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import BubbleSort from './routes/BubbleSort';
import SelectionSort from './routes/SelectionSort';
import InsertionSort from './routes/InsertionSort';
import MergeSort from './routes/MergeSort';
import HeapSort from './routes/HeapSort';
import QuickSort from './routes/QuickSort';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/bubblesort" element={<BubbleSort />} />
        <Route path="/selectionsort" element={<SelectionSort />} />
        <Route path="/insertionsort" element={<InsertionSort />} />
        <Route path="/mergesort" element={<MergeSort />} />
        <Route path="/heapsort" element={<HeapSort />} />
        <Route path="/quicksort" element={<QuickSort />} />
      </Routes>
    </Router>
  );
}

export default App;
