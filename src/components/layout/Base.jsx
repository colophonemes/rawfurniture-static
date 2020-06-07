import Header from './Header'
import Navigation from './Navigation'
import Content from './Content'

const Base = ({ children }) => {
  return <>
    <Header />
    <Navigation />
    <Content>
      {children}
    </Content>
  </>
}

export default Base
