import { Routes, Route } from 'react-router-dom'



// Components
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
import ProtectedRoute from './components/ProtectedRoute'

// Containers
import Main from './containers/Main'

// Pages

import Home from "./pages/Home"
import Library from "./pages/Library"
import Search from "./pages/Search"
import Contact from "./pages/Contact"
import DashBoard from './pages/DashBoard'

import Community from './pages/community'
// Style
import './App.css';


const App = () => {
  return (
    <div className="App">
      
        <AppHeader className="App-header" />
        <Main className="App-main">
            <Routes>
              <Route exact path="/" element={<Home />} /> {/* Login */}
              
              <Route path="/dashboard" element={<DashBoard />} />
              <Route path="/home" element={<Home />} /> 
              <Route path="/community" element={<Community />} />
              <Route element={<ProtectedRoute redirectPath='/login'/>}>
                <Route path="/library" element={<Library/>} />
                <Route path="/search" element={<Search/>} />
              </Route>
              <Route path="/contact" element={<Contact />} />
            </Routes>
        </Main>
        <AppFooter className="App-footer" />
    
    </div>
  )
}

export default App
