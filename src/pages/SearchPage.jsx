import newStyled from '@emotion/styled'
import BookSearchForm from '@/components/BookSearchForm'
import React from 'react'

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
  return (
    <>
      <Header>
        <HeaderContainer>
          <LogoText>Book List</LogoText>
          <HeaderSearchForm>
            <BookSearchForm />
          </HeaderSearchForm>
        </HeaderContainer>
      </Header>
    </>
  )
}

export default SearchPage
