import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard/index'

class MatchCard extends Component {
  state = {data: [], isLoading: true}

  componentDidMount() {
    this.teamdata()
  }

  teamdata = async () => {
    const responce = await fetch('https://apis.ccbp.in/ipl')
    const data = await responce.json()
    const newteam = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      imageUrl: each.team_image_url,
    }))
    this.setState({data: newteam, isLoading: false})
  }

  render() {
    const {data, isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          data.map(each => <TeamCard teams={each} />)
        )}
      </div>
    )
  }
}

export default MatchCard
