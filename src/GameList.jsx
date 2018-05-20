import React, {Component} from 'react'
import Game from './Game'
import './css/Gamelist.css'

class GameList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      gamelist: null,
      streamlist: null,
      redirect: false,
      actualGame: null
    }
    //this.yourFunction = this.yourFunction.bind(this)
  }

  fetchGameList () {
    window.fetch(`https://api.twitch.tv/kraken/games/top?limit=100`, {
      method: 'GET',
      headers: {
        'client-id': 'powu8x0spzqysuuvja1y8jbcfoldga'
      }
    })
        .then(response => response.json())
        .then(response => {
          this.setState({
            gamelist: response
          })
        })
  }

  componentWillMount () {
    this.fetchGameList()
  }

  getStreamList (e, gameName) {
    this.setState({redirect: true, actualGame: gameName})
  }

  render () {

    if (this.state.gamelist !== null) {
      let myGames = this.state.gamelist.top
      let filteredGames = null

            // Filter by user query
      filteredGames = myGames.filter((filterGame) => {
        const queryLength = this.props.query.length
        const subGameName = filterGame.game.name.substring(0, queryLength).toLowerCase()
        return (subGameName.localeCompare(this.props.query.toLowerCase()) === 0)
      })

            // Render the filtered games
      return (
        <div className='gamelist-con'>
          {
                        filteredGames.map((thisgame, index) => {
                          return (
                            <Game
                              getStreamList={(e, gameName) => this.getStreamList(e, thisgame.game.name)}
                              key={index}
                              imgURL={thisgame.game.box.large}
                              gamename={thisgame.game.name}
                              viewers={thisgame.viewers}
                            />)
                        })}
        </div>
      )
    } else {
      return (<div />)
    }
  }
}

export default GameList
