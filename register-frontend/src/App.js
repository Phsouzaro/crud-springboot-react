import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import CreateOrUpdateEmployee from './components/CreateOrUpdateEmployee';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

function App() {
  return (
    <Router>
      <HeaderComponent />
      <div className='container'>
        <Routes>
          <Route exact path="/" element={<ListEmployeeComponent />}></Route>
          <Route path="/employees" element={<ListEmployeeComponent />}></Route>
          <Route path="/add-employee/:id" element={<CreateOrUpdateEmployee />}></Route>
          <Route path="/view-employee/:id" element={<ViewEmployeeComponent />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
