import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import About from './components/About'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <div className="app-container">
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default App
