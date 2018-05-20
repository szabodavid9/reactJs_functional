import React, {Component} from 'react'
import Stream from './Stream'
import './css/StreamList.css'
import RouterApp from './RouterApp'

class StreamList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      streamlist: null,
      redirect: false,
      actualStream: null
    }
  }

  componentWillMount () {
    console.log(this.props)
    let realGameName = this.props.gamename.split('-').join(' ')
    window.fetch(`https://api.twitch.tv/kraken/streams?limit=20&game=${realGameName}`, {
      method: 'GET',
      headers: {
        'client-id': 'powu8x0spzqysuuvja1y8jbcfoldga'
      }
    })
        .then(response => response.json())
        .then(response => {
          if (response._total !== 0) {
            this.setState({
              streamlist: response
            })
          }
        })
  }

  getStream (channelURL) {
    this.setState({redirect: true, actualStream: channelURL})
  }

  render () {
    if (this.state.redirect) {
      return <RouterApp channelURL={this.state.actualStream} />
    }

    if (this.state.streamlist !== null) {
      let myStreams = this.state.streamlist.streams
      return (
        <div className='streamlist-con'>
          {
                        myStreams.map((thisStream, index) => {
                          return (
                            <Stream
                              key={index}
                              imgURL={thisStream.preview.medium}
                              streamDisplayName={thisStream.channel.display_name}
                              streamViews={thisStream.viewers}
                              streamName={thisStream.channel.name}
                              channelURL={thisStream.channel.name}
                              getStream={() => this.getStream(thisStream.channel.name)}
                              gamename={this.props.gamename}
                            />)
                        })}
        </div>
      )
    } else {
      return (<div />)
    }
  }
}

export default StreamList
