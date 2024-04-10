import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './Pages/Main/Main'
import MainLayout from './layout/MainLayout'
import SingleFilm from './Pages/SingleFilm/SingleFilm'
import NotFound from './Pages/NotFound/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Main />} />
          <Route path=':id' element={<SingleFilm />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
