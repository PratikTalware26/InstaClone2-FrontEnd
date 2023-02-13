import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './LandingPage/LandingPage';
import Createpost from './CreatePost/Createpost';
import Post from './PostViewPage/Post';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/posts' element={<Post/>}/>
          <Route path='/create' element={<Createpost/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
