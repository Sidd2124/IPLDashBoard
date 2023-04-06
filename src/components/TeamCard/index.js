import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teams} = props
  const {id, name, imageUrl} = teams
  return (
    <Link to={`/blogs/${id}`}>
      <div className="team">
        <h1>{name}</h1>
        <img src={imageUrl} alt={name} />
      </div>
    </Link>
  )
}
export default TeamCard
