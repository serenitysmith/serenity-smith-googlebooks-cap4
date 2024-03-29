import { Routes, Route } from 'react-router-dom'

import { UserAuthContextProvider } from './context/userAuthContext'

// Components
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
import ProtectedRoute from './components/ProtectedRoute'

// Containers
import Main from './containers/Main'

// Pages
import Community from './pages/Community/community'
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Library from "./pages/Library"
import Search from "./pages/Search"
import Contact from "./pages/Contact"

// Style
import './App.css';

const App = () => {
  return (
    <div className="App">
      <UserAuthContextProvider>
        <AppHeader className="App-header" />
        <Main className="App-main">
            <Routes>
              <Route exact path="/" element={<Home />} /> {/* Login */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
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
      </UserAuthContextProvider>
    </div>
  )
}

export default App
