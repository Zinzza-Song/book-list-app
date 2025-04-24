import 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import SearchPage from './pages/SearchPage'
import BookDetailPage from './pages/BookDetailPage'
import { css, Global } from '@emotion/react'

function App() {
  const Layout = () => {
    return (
      <div>
        <Global
          styles={css`
            body {
              background-color: white;
              color: black;
              transiton-duration: 0.2s;
              transiton-property: background-color, color;
            }

            a {
              color: black;
              text-decoration: none;
            }

            ul {
              list-style: none;
              padding: 0;
            }
          `}
        />
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
