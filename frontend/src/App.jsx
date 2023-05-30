import { useState } from 'react'
import { Container  } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeSreen from './screens/HomeSreen'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <HomeSreen />
        </Container>
      </main>
      <Footer/>
    </>
  )
}

export default App
