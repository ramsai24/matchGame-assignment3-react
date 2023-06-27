import {Component} from 'react'
import TabItems from '../tabItem'
import ImageItems from '../imageItems'
import PlayAgain from '../playAgain'

import './index.css'

class Matchgame extends Component {
  constructor(props) {
    super(props)
    this.randomNum = Math.ceil(Math.random() * props.imagesList.length) - 1
    this.state = {
      imagesList: props.imagesList,

      tabsList: props.tabsList,
      score: '0',
      timer: 60,
      // randomItem: props.imagesList[this.randomNum],
      // matchedImage: props.imagesList[this.randomNum].imageUrl,
      matchedImage: props.imagesList[0].imageUrl,
      isActiveTab: props.tabsList[0].tabId,
      matchId: props.imagesList[0].id,
      notmatchId: true,
    }
  }

  componentDidMount() {
    this.timerId = setInterval(this.startTimer, 1000)
    this.setState({notmatchId: true})
  }

  //   componentWillUnmount() {
  //     clearInterval(this.timerId)
  //   }

  startTimer = () => {
    const {timer, score, notmatchId} = this.state

    if (notmatchId) {
      if (timer !== 0) {
        this.setState(prev => ({timer: prev.timer - 1}))
      } else {
        this.setState({notmatchId: false, timer, score})
      }
    }
  }

  tabItem = id => {
    console.log(id)
    this.setState({isActiveTab: id})
  }

  matchWithMatchedImage = id => {
    console.log(id)
    const {matchId, imagesList, timer} = this.state
    const randomNum = Math.ceil(Math.random() * imagesList.length) - 1
    if (id === matchId) {
      this.setState(prev => ({
        score: parseInt(prev.score) + 1,
        matchedImage: imagesList[randomNum].imageUrl,
        matchId: imagesList[randomNum].id,
      }))
    } else {
      this.setState({notmatchId: false, timer})
      // clearInterval(this.timerId)
    }
  }

  playAgainupdateNotmatchID = status => {
    const {imagesList} = this.state
    this.setState({
      notmatchId: status,
      score: '0',
      matchedImage: imagesList[0].imageUrl,
      matchId: imagesList[0].id,
      timer: 60,
    })
  }

  render() {
    const {
      imagesList,
      isActiveTab,
      //   randomItem,
      tabsList,
      score,
      timer,
      matchedImage,
      matchId,
      notmatchId,
    } = this.state
    // console.log(imagesList)
    //  console.log(tabsList)
    // const randomNum = Math.ceil(Math.random() * imagesList.length) - 1
    // console.log(imagesList[randomNum].imageUrl)

    // console.log(randomItem)
    console.log(matchedImage)
    console.log(matchId)
    console.log(score)

    const thumbnailList = imagesList.filter(
      each => each.category === isActiveTab,
    )

    return (
      <div className="app-container">
        <div className="bg-container">
          <nav className="nav-container">
            <img
              className="website-logo"
              src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
              alt="website logo"
            />
            <ul className="score-timer-container">
              <li>
                {/* <p>{`Score:${score}`}</p> */}
                <p>{`Score: `}</p>
                <p>{`${score}`}</p>
              </li>
              <li className="timer-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                  alt="timer"
                />
                <p>{`${timer} sec`}</p>
              </li>
            </ul>
          </nav>
          <div>
            {notmatchId ? (
              <div className="image-and-thumbnail-container">
                <img className="matched-img" src={matchedImage} alt="match" />
                <ul className="tabList-container">
                  {tabsList.map(each => (
                    <TabItems
                      tabItem={each}
                      key={each.tabId}
                      tabClick={this.tabItem}
                    />
                  ))}
                </ul>
                <div>
                  <ul className="thumbnail-container">
                    {thumbnailList.map(each => (
                      <ImageItems
                        imageItem={each}
                        key={each.id}
                        thumbnailSelect={this.matchWithMatchedImage}
                      />
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <PlayAgain
                updatedscore={score}
                statusUpdateMatch={this.playAgainupdateNotmatchID}
              />
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Matchgame
