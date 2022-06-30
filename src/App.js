import './App.css';
import Sidebar from './Sidebar';
import React from 'react';
import Home from './Home';
import Recipes from './Recipes';
import Lunch from './Lunch';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ChickenCutletSandwich from './Chicken-Cutlet-Sandwich';
import BroccoliPestoPasta from './Broccoli-Pesto-Pasta';
import LentilSalad from './Lentil-Salad';
function App() {
  return (
    <Router>
    <div className="App">
    <Sidebar/>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home/>}>
          </Route>
          <Route path="/recipes" element={<Recipes/>}>
          </Route>
          <Route path="/recipes/lunch" element={<Lunch/>}>
          </Route>
          <Route path="/recipes/chicken-cutlet-sandwich" element={<ChickenCutletSandwich/>}>
          </Route>
          <Route path="/recipes/broccoli-pesto-pasta" element={<BroccoliPestoPasta/>}>
          </Route>
          <Route path="/recipes/lentil-salad" element={<LentilSalad/>}>
          </Route>
        </Routes>
    </div>
    </div>
    </Router>
  );
}

export default App;
