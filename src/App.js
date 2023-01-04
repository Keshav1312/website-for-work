import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from './aa/Main';
import Energyproduct from './aa/Energyproduct';
import Application from './aa/Application';
import Iotproducts from './aa/Iotproducts';
import Knowledgebase from './aa/Knowledgebase';
import Abtjeltronix from './aa/Abtjeltronix';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* This is the routing page where all the routing for the page is declared. */}
        <BrowserRouter>     
          <Routes>
            <Route path="/" element={<Main/>}></Route>
            <Route path="/energy_products" element={<Energyproduct/>}></Route>
            <Route path="/applications" element={<Application/>}></Route>
            <Route path="/Iot_products" element={<Iotproducts/>}></Route>
            <Route path="/knowledge_base" element={<Knowledgebase/>}></Route>
            <Route path="/abt_jeltronix" element={<Abtjeltronix/>}></Route>
            
          </Routes>
        </BrowserRouter>
      
      </header>
    </div>
  );
}

export default App;
