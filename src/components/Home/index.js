import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {Component} from 'react'
import './index.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {
    teamCardList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamCardData()
  }

  getTeamCardData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const teamArray = data.teams

    const updatedData = teamArray.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))

    this.setState({teamCardList: updatedData, isLoading: false})
  }

  render() {
    const {teamCardList, isLoading} = this.state
    return (
      <div className="home-container">
        <div className="ipl-icon-and-main-heading-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="home-main-heading">IPL Dashboard</h1>
        </div>

        <ul className="team-card-container">
          {isLoading ? (
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          ) : (
            teamCardList.map(eachItem => (
              <TeamCard key={eachItem.id} eachItem={eachItem} />
            ))
          )}
        </ul>
      </div>
    )
  }
}

export default Home
