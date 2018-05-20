import React, {Component} from 'react'
import './css/ActualStream.css'

// Retrun a Stream entity, including a video player and a chat.

class ActualStream extends Component {
  render () {
    const streamURL = `https://player.twitch.tv/?channel=${this.props.channelURL}`
    const chatURL = `https://www.twitch.tv/${this.props.channelURL}/chat?popout=`
    return (
      <div className='actual-stream-con'>
        <iframe 
          className='stream-frame'
          src={streamURL}
          frameborder='0' 
          allowfullscreen='true' 
          scrolling='no'
          height='720' 
          width='1100' 
          title={streamURL} 
        />
        <iframe className='chat' src={chatURL} frameborder='0' scrolling='no' height='720' width='350' />
      </div>
    )
  }
}

export default ActualStream
