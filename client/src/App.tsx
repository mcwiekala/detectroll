import './index.scss'
import MainPage from './pages/MainPage/MainPage'
import LearnMorePage from './pages/LearnMorePage/LearnMorePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ResultPage from './pages/ResultPage/ResultPage'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/learn-more" element={<LearnMorePage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
