import {Component} from 'react'

import TeamCard from '../TeamCard/index'

class MatchCard extends Component {
  state = {data: []}

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
    this.setState({data: newteam})
  }

  render() {
    const {data} = this.state
    return (
      <div>
        {data.map(each => (
          <TeamCard teams={each} />
        ))}
      </div>
    )
  }
}

export default MatchCard
