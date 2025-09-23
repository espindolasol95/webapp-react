import React from 'react'
import DefaultLayout from './layout/DefaultLayout'
import DetailFilm from './modules/pages/DetailFilm'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePages from './modules/pages/HomePages'

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePages />} />
          <Route path="/books/:id" element={<DetailFilm />} />
        </Route>
      </Routes>
    </BrowserRouter>
 
)
}

export default App
