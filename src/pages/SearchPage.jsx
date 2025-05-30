import newStyled from '@emotion/styled'
import BookSearchForm from '@/components/BookSearchForm'
import BooksList from '@/components/BooksList'
import React, { useState } from 'react'
import axios from 'axios'
import Loader from '@/components/Loader'
import {
  Container,
  Header,
  HeaderContainer,
  LogoText
} from '@/components/Shared'

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

    if (books != {}) setBooks({})

    try {
      const res = await axios.get(`${API_BASE_URL}/v1/volumes?q=${searchTerm}`)
      setBooks(res.data)
    } catch (err) {
      console.log(err)
    }

    setLoading(false)
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

      <Container>
        <Loader loading={loading}>
          "<strong>{searchTerm}</strong>" 책을 찾고 있습니다.
        </Loader>
        <BooksList books={books} />
      </Container>
    </>
  )
}

export default SearchPage
