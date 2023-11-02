import './App.css';
import { Routes, Route } from 'react-router-dom'
import Login from './components/pages/Login';
import Dashboard from './components/dashboard/Dashboard'
import AddFarmer from './components/dashboard/AddFarmer';
function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/dashboard/addfarmer' element={<AddFarmer />} />
      </Routes>
    </div>
  );
}

export default App;
