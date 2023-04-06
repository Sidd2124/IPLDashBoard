import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './components/Home/index'
import TeamMathes from './components/TeamMatches/index'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Home />
      <Route exact path="/blogs/:id" component={TeamMathes} />
    </Switch>
  </BrowserRouter>
)

export default App
