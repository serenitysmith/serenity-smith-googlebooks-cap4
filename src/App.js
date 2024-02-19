import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Components
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import Main from './containers/Main'; // Import the Main component

// Pages
import Community from "./pages/Community";
import Home from "./pages/Home";
import Library from "./pages/Library";
import Search from "./pages/Search";
import Contact from "./pages/Contact";
import DashBoard from './pages/DashBoard';

// Style
import './App.css';

const App = () => {
  return (
    <div className="App">
      <AppHeader className="App-header" />
      <Main className="App-main"> {/* Add Main component here */}
        <Routes>
          <Route exact path="/" element={<Home />} /> {/* Login */}
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/home" element={<Home />} />
          <Route path="/community" element={<Community />} />
          <Route path="/library" element={<Library />} />
          <Route path="/search" element={<Search />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Main>
      <AppFooter className="App-footer" />
    </div>
  );
};

export default App;
