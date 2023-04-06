import MatchCard from '../MatchCard/index'

import './index.css'

const Home = () => (
  <div className="main">
    <div className="layer">
      <img
        className="logo"
        src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
        alt=" ipl logo"
      />
      <h1 className="head">IPL Dash Board</h1>
    </div>
    <MatchCard />
  </div>
)
export default Home
