import React from 'react'
import App from './App'
import { Routes, Route } from 'react-router-dom'
import FigmaDesigns from './Pages/Design-Showcase/FigmaDesigns'
import Landing from './Pages/Landing/Landing'
import ProjectDetail from './Pages/ProjectDetail/ProjectDetail'

export default function Layout() {
  return (
    <App>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
        <Route path="/figma-designs" element={<FigmaDesigns />} />
      </Routes>
    </App>
  )
}