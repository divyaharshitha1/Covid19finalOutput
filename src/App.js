import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Vaccination from './components/Vaccination'
import StateWiseCases from './components/StateWiseCases'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <div className="app-container">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/vaccination" component={Vaccination} />
      <Route exact path="/about" component={About} />
      <Route exact path="/state/:stateCode" component={StateWiseCases} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </div>
)

export default App

/* startFetching = () => {
    const {history} = this.props
    history.replace('/')
  }
  */
