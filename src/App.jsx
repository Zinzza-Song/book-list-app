import 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import SearchPage from './pages/SearchPage'
import BookDetailPage from './pages/BookDetailPage'

function App() {
  const Layout = () => {
    return (
      <div>
        <Outlet />
      </div>
    )
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Layout />}>
          <Route
            index
            element={<SearchPage />}
          />
          <Route
            path="/book/:bookId"
            element={<BookDetailPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
