import Home from "./Home"
import View from './View'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/view' element = {<View/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
