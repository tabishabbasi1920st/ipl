import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {competingTeam} = latestMatchDetails
  console.log(competingTeam)

  return (
    <div className="latest-match-main-container">
      <div className="first-container">
        <div className="first-content-container">
          <h1 className="competing-team">Chennai</h1>
          <p>2010</p>
        </div>
      </div>
      <div className="second-container">second</div>
    </div>
  )
}

export default LatestMatch
