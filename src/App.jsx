import React, {Component} from 'react'
import {FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap'
import GameList from './GameList'
import './css/App.css'
import { Link } from 'react-router-dom'
import StreamList from './StreamList'
import ActualStream from './ActualStream'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      query: '',
      streams: null,
      submited: false
    }
  }

  search () {
    this.props.history.push('/')
  }

  render () {
    let MyComponenet = <GameList query={this.state.query}/>
    if (this.props.match.path === '/streamlist/:gamename') {
      MyComponenet = <StreamList gamename={this.props.match.params.gamename} />
    }

    if (this.props.match.path === '/livestream/:channelURL') {
      MyComponenet = <ActualStream channelURL={this.props.match.params.channelURL}/>
    }

    //console.log(this.props)
    return (
      <div className='App'>
        <div className='main-title-con'>
          <Link to={`/`}>
            {/* <img className="logo" src={require('./img/play.png')} alt=""/>  */}
            <h1 className='main-title'>React Game-streaming</h1>
          </Link>
        </div>
        <div className='myroot'>
          <div className='menu'>
            <FormGroup>
              <InputGroup>
                <FormControl
                  type='text'
                  placeholder='Search for a game'
                  query={this.state.query}
                  onChange={event => {
                    this.setState(
                      {
                        query: event.target.value
                      }
                                    )
                  }}
                  onKeyPress={event => {
                    if (event.key === 'Enter') { this.search() }
                  }}
                 />
                <InputGroup.Addon onClick={() => this.search()}>
                  <Glyphicon glyph='search' />
                </InputGroup.Addon>
              </InputGroup>
            </FormGroup>
          </div>

          {/* <MyComponenet 
            query={this.state.query}
            gamename={this.props.match.params.gamename}
            channelURL={this.props.match.params.channelURL} 
          /> */}
          {MyComponenet}
        </div>
      </div>
    )
  }
}

export default App
