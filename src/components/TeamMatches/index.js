import {Component} from 'react'
import './index.css'
import LatestMatch from '../LatestMatch'

class TeamMatches extends Component {
  state = {
    teamMatchesDetailsObj: {},
  }

  componentDidMount() {
    this.getTeamMatchesDetails()
  }

  getTeamMatchesDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const latestMatchDetails = data.latest_match_details
    const updatedLatestMatchDetails = {
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      date: latestMatchDetails.date,
      firstInnings: latestMatchDetails.first_innings,
      id: latestMatchDetails.id,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      matchStatus: latestMatchDetails.match_status,
      result: latestMatchDetails.result,
      secondInnings: latestMatchDetails.second_innings,
      umpires: latestMatchDetails.umpires,
      venue: latestMatchDetails.venue,
    }

    const recentMatches = data.recent_matches
    const updatedRecentMatches = recentMatches.map(eachItem => ({
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      date: eachItem.date,
      firstInnings: eachItem.first_innings,
      id: eachItem.id,
      manOfTheMatch: eachItem.man_of_the_match,
      matchStatus: eachItem.match_status,
      result: eachItem.result,
      secondInnings: eachItem.second_innings,
      umpires: eachItem.umpires,
      venue: eachItem.venue,
    }))

    const bannerUrl = data.team_banner_url
    const updatedUrl = bannerUrl

    const updatedData = {
      latestMatchDetails: updatedLatestMatchDetails,
      recentMatches: updatedRecentMatches,
      teamBannerUrl: updatedUrl,
    }

    this.setState({teamMatchesDetailsObj: updatedData})
  }

  render() {
    const {teamMatchesDetailsObj} = this.state
    const {teamBannerUrl} = teamMatchesDetailsObj
    const {latestMatchDetails} = teamMatchesDetailsObj

    return (
      <div className="team-matches-bg-container">
        <div className="team-matches-banner-container">
          <img src={teamBannerUrl} alt="" className="team-matches-banner-img" />
        </div>

        <h1 className="latest-match-heading">Latest Matches</h1>
        <LatestMatch latestMatchDetails={latestMatchDetails} />
      </div>
    )
  }
}

export default TeamMatches
