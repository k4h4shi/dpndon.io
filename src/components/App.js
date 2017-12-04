import React from 'react'
import Routes from './Routes'
import Header from './Header'
import Footer from './Footer'

/**
 * Show filterable project's dependency infomation.
 * This app require project and dependencies as property.
 */
function App() {
  return (
    <div>
      <Header />
      <Routes/>
      <Footer />
    </div>
  )
}

export default App