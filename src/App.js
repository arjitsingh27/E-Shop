import './index.css'
import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './components/HomeScreen';
import { BrowserRouter, Route } from 'react-router-dom'
import ProductScreen from './components/ProductScreen';


function App() {
  return (
    <BrowserRouter className="App">
      <Header />
      <main className="py-4">
        <Container>
          <Route path='/' exact component={HomeScreen} />
          <Route path='/product/:id' exact component={ProductScreen} />

        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
