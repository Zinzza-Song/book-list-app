import newStyled from '@emotion/styled'
import BookSearchForm from '@/components/BookSearchForm'
import React, { useState } from 'react'
import axios from 'axios'

const LogoText = newStyled.h3`
  margin: 0;
`

const Container = newStyled.div`
  max-width: 960px;
  padding: 15px;
  margin: 0 auto;
`

const Header = newStyled.header`
  border-bottom: 1px solid gray;
`

const HeaderContainer = newStyled(Container)`
  display: flex;
  align-items: center;
  @media (max-width: 778px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const HeaderSearchForm = newStyled.div`
  margin-left: auto;
`

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [books, setBooks] = useState({})
  const [loading, setLoading] = useState(false)

  const API_BASE_URL = `https://www.googleapis.com/books`

  const fetchBooks = async () => {
    setLoading(true)

    try {
      const res = await axios.get(`${API_BASE_URL}/v1/volumes?q=${searchTerm}`)
      setBooks(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  const handleChange = e => {
    setSearchTerm(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    fetchBooks()
  }

  return (
    <>
      <Header>
        <HeaderContainer>
          <LogoText>Book List</LogoText>
          <HeaderSearchForm>
            <BookSearchForm
              onChange={handleChange}
              onSubmit={handleSubmit}
              searchTerm={searchTerm}
            />
          </HeaderSearchForm>
        </HeaderContainer>
      </Header>
    </>
  )
}

export default SearchPage
