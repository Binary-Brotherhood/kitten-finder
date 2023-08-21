import logo from './logo.svg';
import './App.css';
import Timer from './components/Timer';
import firebaseapp from './firebase/firebase';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/HomePage/Home';
import Login from './pages/Login';
import AddPost from './pages/AddPost/AddPost';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/add_post" element={<AddPost/>}/>
      </Routes>
    </Router>
  );
}

export default App;
