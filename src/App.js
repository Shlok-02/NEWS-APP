import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';

function App() {
  return (
    <>
		<div className="app">

      <Routes>
        <Route path="/" exact element={<Home />} />
       {/*  <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
		</div>
	</>
  );
}

export default App;
