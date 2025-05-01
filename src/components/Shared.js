import newStyled from '@emotion/styled'

export const LogoText = newStyled.h3`
  margin: 0;
`

export const Container = newStyled.div`
  max-width: 960px;
  padding: 15px;
  margin: 0 auto;
`

export const Header = newStyled.header`
  border-bottom: 1px solid gray;
`

export const HeaderContainer = newStyled(Container)`
  display: flex;
  align-items: center;
  @media (max-width: 778px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
