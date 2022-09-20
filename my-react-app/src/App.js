import React from 'react'

import { Footer, Header, Curriculum } from './containers';
import { Feature, Navbar } from './components';

const App = () => {
  return (
    <div className = "App">
        <div className = "gradient__bg">
            <Navbar />
            <Header/>
        </div>
        <Curriculum />
        <Footer />
    </div>
  )
}

export default App