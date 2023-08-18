import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {eachItem} = props
  const {id, name, teamImageUrl} = eachItem
  return (
    <Link to={`team-matches/${id}`} className="link-team-card">
      <li className="team-card">
        <img src={teamImageUrl} alt={name} className="team-card-image" />
        <p className="team-card-team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
