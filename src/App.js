import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './components/Home/index'
import TeamMathes from './components/TeamMatches/index'
import NotFound from './components/NotFound/index'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/blogs/:id" component={TeamMathes} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
