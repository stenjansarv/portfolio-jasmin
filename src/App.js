import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import About from './pages/About'
import Work from './pages/Work'

import Layout from './pages/Layout'

const App = () => {
  return (
    <div>
      <Router>
        <Layout>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Work />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  )
}

export default App
