import { useState } from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { css, Global, ThemeProvider, useTheme } from '@emotion/react'
import SearchPage from '@/pages/SearchPage'
import BookDetailPage from '@/pages/BookDetailPage'
import Footer from '@/components/Footer'
import { themeDark, themeLight } from '@/components/Theme'

function App() {
  const [isDark, setIsDark] = useState(false)

  const Layout = ({ isDark, setIsDark }) => {
    const theme = useTheme()

    return (
      <div>
        <Global
          styles={css`
            body {
              background-color: ${theme.background};
              color: ${theme.text};
              transiton-duration: 0.2s;
              transiton-property: background-color, color;
            }

            a {
              color: ${theme.text};
              text-decoration: none;
            }

            ul {
              list-style: none;
              padding: 0;
            }
          `}
        />

        <div
          css={css`
            min-height: 90vh;
          `}>
          <Outlet />
        </div>

        <Footer
          isDark={isDark}
          setIsDark={setIsDark}
        />
      </div>
    )
  }

  return (
    <BrowserRouter>
      <ThemeProvider theme={isDark ? themeDark : themeLight}>
        <Routes>
          <Route
            path="/"
            element={
              <Layout
                isDark={isDark}
                setIsDark={setIsDark}
              />
            }>
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
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
