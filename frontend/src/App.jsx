import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import { Container  } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CardScreen from './screens/CardScreen'

const App = () => {

  return (
    <Router>
        <Header />
        <main className='py-3'>
          <Container>
            <Routes>
              <Route exact path='/' element={<HomeScreen />} />
              <Route path='/product/:id' element={<ProductScreen />} />
              <Route path='/cart/:id?' element={ <CardScreen /> } />

            </Routes>
          </Container>
        </main>
        <Footer/>
    </Router>
  )
}

export default App
