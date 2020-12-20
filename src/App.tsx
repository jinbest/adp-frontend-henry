import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Footer, Header } from './components'
import { Home } from './pages/home/'

const subDomain = 'device1'

function App(): JSX.Element {
  require(`./assets/DeviceList/${subDomain}/styles/index.css`);

  return (
    <>
      <Header />
      <Router>
        <Route path='/' exact component={Home} />
        <Route path='/home' render={() => (<Redirect to="/" />)} />
      </Router>
      <Footer />
    </>
  )
}

export default App;
