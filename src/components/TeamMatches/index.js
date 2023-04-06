import {Component} from 'react'
import Loader from 'react-loader-spinner'

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
    }
    this.setState({Data: updatedData, isLoading: false})
  }

  renderteamItemDetails = () => {
    const {Data} = this.state
    const {imageUrl} = Data

    return (
      <div>
        <img src={imageUrl} alt="logo" />
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
