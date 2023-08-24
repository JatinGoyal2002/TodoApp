import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='todo'>ToDo App</div>
      <Routes>
        <Route exact path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
