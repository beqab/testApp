import React from 'react'
import Container from '../container/container'
import HeaderComponent from '../header/header'
import FooterComponent from '../footer/footer'

const Layout = ({children}: any) => {
  return (
    <Container>
      <HeaderComponent />
      {children}
      <FooterComponent />
    </Container>
  )
}

export default Layout