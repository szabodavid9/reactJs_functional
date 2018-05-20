import React, {Component} from 'react'
import './css/Game.css'
import {Link} from 'react-router-dom'

class Game extends Component {
  constructor (props) {
    super(props)
    this.state = {
      redirect: false
    }
  }

  render () {
    let gameName = this.props.gamename
        // Gamename withoutspace
    let newGameName = gameName.split(' ').join('-')
    let streamlist = `/streamlist/${newGameName}`

    return (
      <Link to={streamlist}>
        {/* onClick={(e,gameName) => this.props.getStreamList(e,gameName)} */}
        <div className='game-con' >
          <img src={this.props.imgURL} alt='game-img' />
          <h3>{this.props.gamename}</h3>
          <h4>Viewers: {this.props.viewers}</h4>
        </div>
      </Link>
    )
  }
}

export default Game
