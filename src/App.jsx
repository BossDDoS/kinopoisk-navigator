import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout, Flex } from 'antd'
import Main from './Pages/Main/Main'
import MainLayout from './layout/MainLayout'
import SingleFilm from './Pages/SingleFilm/SingleFilm'
import NotFound from './Pages/NotFound/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Flex gap='middle' wrap='wrap'>
        <Layout
          style={{
            borderRadius: 8,
            overflow: 'hidden',
            width: 'calc(50% - 8px)',
            maxWidth: '100%',
            padding: '5%',
            backgroundColor: 'white',
          }}
        >
          <Routes>
            <Route path='/' element={<MainLayout />}>
              <Route index element={<Main />} />
              <Route path=':id' element={<SingleFilm />} />
              <Route path='*' element={<NotFound />} />
            </Route>
          </Routes>
        </Layout>
      </Flex>
    </BrowserRouter>
  )
}

export default App
