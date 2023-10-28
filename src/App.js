import './App.css';
import { Routes, Route } from 'react-router-dom'
import Login from './components/pages/Login'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/user/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
