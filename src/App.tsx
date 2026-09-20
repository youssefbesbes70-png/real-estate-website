import "./App.css"

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ProtectedRoute from "./components/ProtectedRoute"

import Home from "./pages/Home"
import Projects from "./pages/Projects"
import ProjectDetails from "./pages/ProjectDetails"
import About from "./pages/About"
import Contact from "./pages/Contact"

import Admin from "./pages/Admin"
import AdminLogin from "./pages/AdminLogin"

function AppContent() {
  const location = useLocation()

  const showFooter =
    location.pathname === "/projects" ||
    location.pathname === "/about" ||
    location.pathname === "/contact"

  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/projects"
          element={<Projects />}
        />

        <Route
          path="/projects/:slug"
          element={<ProjectDetails />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/admin/login"
          element={<AdminLogin />}
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
      </Routes>

      {showFooter && <Footer />}
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App