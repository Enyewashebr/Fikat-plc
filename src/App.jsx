import React from 'react'
import Home from './pages/Home'
import AppRoutes from './routes/AppRoutes';
import './index.css'
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <AppRoutes />
    </>
  )
}

export default App

