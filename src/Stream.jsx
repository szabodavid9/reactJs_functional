import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Stream extends Component {
  render () {
    let channelURL = this.props.channelURL
        // let streamURL = `/streamlist/${this.props.gamename}/${channelURL}`;
    let streamURL = `/livestream/${channelURL}`
    return (
      <Link to={streamURL}>
        {/* onClick={() => this.props.getStream(channelURL)} */}
        <div className='stream-con' >
          <img src={this.props.imgURL} alt='stream-img' />
          <h3>{this.props.streamDisplayName}</h3>
          <h4>Viewers: {this.props.streamViews}</h4>
        </div>
      </Link>
    )
  }
}

export default Stream
