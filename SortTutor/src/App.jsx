import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import BubbleSort from "./Pages/BubbleSort";
import SelectionSort from "./Pages/SelectionSort";
import InsertionSort from "./Pages/InsertionSort";
import MergeSort from "./Pages/MergeSort";
import QuickSort from "./Pages/QuickSort";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<BubbleSort />} />
        <Route path="/bubblesort" element={<BubbleSort />} />
        <Route path="/selectionsort" element={<SelectionSort />} />
        <Route path="/insertionsort" element={<InsertionSort />} />
        <Route path="/quicksort" element={<QuickSort />} />
        <Route path="/mergesort" element={<MergeSort />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
