import React from 'react'

// Styled components
import { Wrapper, Header, Footer, Logo } from './styles'

const Layout = ({ children }) => {

  return (
    <Wrapper>
      <Header>
        <Logo />

        <div>
          <li style={{ listStyle: 'none', marginBottom: '10px' }}>WORK</li>
          <li style={{ listStyle: 'none' }}>ABOUT</li>
        </div>
      </Header>
      { children }
      <Footer style={{fontSize: 12}}>© 2021 by Jasmin Elshal.</Footer>
    </Wrapper>
  )
}

export default Layout
