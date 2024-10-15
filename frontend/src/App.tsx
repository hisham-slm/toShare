import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Toaster } from "react-hot-toast"

import LoginPage from "./pages/Login"
import IndexPage from "./pages/IndexPage"
import SignUpPage from "./pages/signup"

function App() {

  return (
    <>
      <Toaster position="top-center"/>
      <BrowserRouter>
        <Routes>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
