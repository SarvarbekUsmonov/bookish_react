import Home from "./Home"
import View from './View'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Search from "./Search";
import SignUp from "./SignUp";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/view' element = {<View/>} />
          <Route path='/login' element = {<Login/>} />
          <Route path="/search" element= {<Search/>}/>
          <Route path='/SignUp' element = {<SignUp/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
