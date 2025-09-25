import React from 'react'
import DefaultLayout from './layout/DefaultLayout'
import DetailFilm from './pages/DetailFilm'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePages from './pages/HomePages'

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePages />} />
          <Route path="/films/:id" element={<DetailFilm />} />
        </Route>
      </Routes>
    </BrowserRouter>
 
)
}

export default App
