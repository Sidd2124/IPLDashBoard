import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LetestMatch from '../LatestMatch/index'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class TeamMathes extends Component {
  state = {Data: {}, isLoading: true}

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const updatedData = {
      imageUrl: data.team_banner_url,
      Umpires: data.latest_match_details.umpires,
      oposition: data.latest_match_details.competing_team,
      date: data.latest_match_details.date,
      venue: data.latest_match_details.venue,
      teamlogo: data.latest_match_details.competing_team_logo,
      firstInnings: data.latest_match_details.first_innings,
      SecondInnings: data.latest_match_details.second_innings,
      man: data.latest_match_details.man_of_the_match,
      Result: data.latest_match_details.result,
      Recent: data.recent_matches.map(each => ({
        team: each.competing_team,
        squiedlogo: each.competing_team_logo,

        winning: each.result,
        status: each.match_status,
      })),
    }
    this.setState({Data: updatedData, isLoading: false})
  }

  renderteamItemDetails = () => {
    const {Data} = this.state
    const {
      imageUrl,
      Umpires,
      oposition,
      date,
      venue,
      teamlogo,
      firstInnings,
      SecondInnings,
      man,
      Result,
      Recent,
    } = Data

    return (
      <div>
        <img className="banner" src={imageUrl} alt="logo" />
        <h1 className="heading">Last match Details</h1>
        <div className="box">
          <div className="match">
            <div>
              <h1 className="heading">{oposition}</h1>
              <p>{date}</p>
              <p>{venue}</p>
              <p>{Result}</p>
            </div>
            <img className="teamlogo" src={teamlogo} alt={oposition} />
          </div>

          <p>First Innings:</p>
          <p>{firstInnings}</p>
          <p>Second Innings:</p>
          <p>{SecondInnings}</p>
          <p>Man Of Match</p>
          <p>{man}</p>
          <p>Umpires</p>
          <p>{Umpires}</p>
        </div>
        <div className="Finel">
          <h1>Previous Matches</h1>
          {Recent.map(each => (
            <LetestMatch className="box" details={each} />
          ))}
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="blog-container">
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          this.renderteamItemDetails()
        )}
      </div>
    )
  }
}

export default TeamMathes
