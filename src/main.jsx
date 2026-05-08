import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import ProjectDetailPage from './pages/ProjectDetailPage.jsx'
import CoffeeShopPage from './pages/CoffeeShopPage.jsx'
import ECommercePlatformPage from './pages/ECommercePlatformPage.jsx'
import SalesAnalyticsDashboardPage from './pages/SalesAnalyticsDashboardPage.jsx'
import BusinessWebsitePage from './pages/BusinessWebsitePage.jsx'
import RevenueDashboardPage from './pages/RevenueDashboardPage.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/coffee-shop" element={<CoffeeShopPage />} />
        <Route path="/e-commerce-platform" element={<ECommercePlatformPage />} />
        <Route path="/sales-analytics-dashboard" element={<SalesAnalyticsDashboardPage />} />
        <Route path="/business-website" element={<BusinessWebsitePage />} />
        <Route path="/revenue-dashboard" element={<RevenueDashboardPage />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
