import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './page/LandingPage'
import LoginPage from './page/LoginPage'
import DashboardPage from './page/DashboardPage'
import AddContentPlannerPage from './page/AddContentPlannerPage'
import ViewContentPlannerPage from './page/ViewContentPlannerPage'


function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/dashboard' element={<DashboardPage />} />
          <Route path='/add-content-planner' element={<AddContentPlannerPage />} />
          <Route path='/view-content-planner' element={<ViewContentPlannerPage />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
