import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Toaster } from "react-hot-toast"

import LoginPage from "./pages/Login"
import IndexPage from "./pages/IndexPage"
import SignUpPage from "./pages/signup"
import ProjectPage from "./pages/ProjectsPage"
import PageMissing from "./pages/404Page"
import ProtectedRoute from "./components/ProtectedRouteComponent"

const APIURL = import.meta.env.VITE_API_URL;

function App() {

  return (
    <>
      <Toaster position="top-center"/>
      <BrowserRouter>
        <Routes>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/projects" element={<ProtectedRoute element={ ProjectPage } apiRoute={`${APIURL}project/`} />} />
          <Route path="*" element={<PageMissing />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
