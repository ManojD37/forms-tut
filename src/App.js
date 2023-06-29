
import { Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import Blog from './pages/Blog';

function App() {
  return (
    <Routes>
      <Route path="/"element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
         <Route path="/signup" element={<Signup/>}/>       
         <Route path="/blog" element={<Blog/>}/> 

     
    </Routes>
  );
}

export default App;
