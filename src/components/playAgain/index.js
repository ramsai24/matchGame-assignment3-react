import './index.css'

const PlayAgain = props => {
  const {updatedscore, statusUpdateMatch} = props
  console.log(updatedscore)
  // const {score} = updatedscore
  // console.log(score)

  const updateMatchStatus = () => {
    statusUpdateMatch(true)
  }

  return (
    <div>
      <img
        className="trophy-img"
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
      />
      <p>YOUR SCORE</p>
      <p>{updatedscore}</p>
      <button type="button" onClick={updateMatchStatus}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
        />
        PLAY AGAIN
      </button>
    </div>
  )
}

export default PlayAgain
