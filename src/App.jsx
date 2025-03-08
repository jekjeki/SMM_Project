import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './page/LandingPage'
import LoginPage from './page/LoginPage'
import DashboardPage from './page/DashboardPage'
import AddContentPlannerPage from './page/AddContentPlannerPage'
import ViewContentPlannerPage from './page/ViewContentPlannerPage'
import BrandAsset from './page/BrandAsset'
import Calendar from './page/Calendar'
import ArticlePage from './page/ArticlePage'
import CreateCompanyPage from './page/CreateCompanyPage'
import CreateUserLoginCompany from './page/CreateUserLoginCompany'
import BeforeAfterPage from './page/BeforeAfterPage'
import SettingKPIPage from './page/SettingKPIPage'
import KegiatanBulananPage from './page/KegiatanBulananPage'
import TargetHasilPage from './page/TargetHasilPage'
import TaglinePage from './page/TaglinePage'
import BrandVoice from './page/BrandVoice'
import ImportantLinks from './page/ImportantLinks'
import BenchmarkPage from './page/BenchmarkPage'
import BrandColorPalette from './page/BrandColorPalette'


function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/dashboard' element={<DashboardPage />} />
          <Route path='/add-content-planner' element={<AddContentPlannerPage />} />
          <Route path='/view-content-planner' element={<ViewContentPlannerPage />} />
          <Route path='/brand-asset' element={<BrandAsset />} />
          <Route path='/calendar' element={<Calendar />} />
          <Route path='/article' element={<ArticlePage />} />
          <Route path='/create-company' element={<CreateCompanyPage />} />
          <Route path='/create-user-company' element={<CreateUserLoginCompany />} />
          <Route path='/before-after' element={<BeforeAfterPage  />} />
          <Route path='/setting-kpi' element={<SettingKPIPage />} />
          <Route path='/kegiatan-bulanan' element={<KegiatanBulananPage />} />
          <Route path='/target-hasil' element={<TargetHasilPage />} />
          <Route path='/tagline' element={<TaglinePage />} />
          <Route path='/brand-voice' element={<BrandVoice />} />
          <Route path='/important-links' element={<ImportantLinks />} />
          <Route path='/benchmark' element={<BenchmarkPage />} />
          <Route path='/color-palette' element={<BrandColorPalette />}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
