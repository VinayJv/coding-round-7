import './App.css';
import { Routes,Route } from "react-router-dom";
import { Continents } from './pages/Continents'; 
import Countries from './pages/Countries';
import Destination from './pages/Destination';
import Individual from './pages/Individual';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Continents />}></Route>
        <Route path="/:continentId" element={<Countries />}></Route>
        <Route path="/:continentId/:countryId" element={<Destination />}></Route>
        <Route path="/:continentId/:countryId/:destinationId" element={<Individual />}></Route>
      </Routes>
    </div>
  );
}

export default App;
