import newStyled from '@emotion/styled'
import React from 'react'

const Input = newStyled.input`
  outline: 0;
  padding: 0.6rem 1rem;
  border: 1px solid rgba(34, 36, 38, 0.5);
  border-radius: 3px;
  min-width: 280px;

  &:focus,
  &:active {
    border-color: #85b7d9;
  }
  
  @media (max-width: 778px) {
    margin-top: 10px
  }
`

const Button = newStyled.button`
  background-color: #fcfcfd;
  color: #36395a;
  border: 1px solid rgba(34, 36, 38, 0.5);
  padding: 0.6rem 1.5rem;
  margin-left: 15px;
  border-radious: 3px;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
  }
`

const Form = newStyled.form`

`

const BookSearchForm = ({ onChange, onSubmit, searchTerm }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Input
        type="search"
        placeholder="책 이름을 검색해주세요."
        onChange={onChange}
        value={searchTerm}
      />

      <Button type="submit">Search</Button>
    </Form>
  )
}

export default React.memo(BookSearchForm)
