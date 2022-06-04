import './index.scss'
import MainPage from './pages/MainPage/MainPage'
import LearnMorePage from './pages/LearnMorePage/LearnMorePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/learn-more" element={<LearnMorePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
