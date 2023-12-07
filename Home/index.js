// Write your code here
import {Component} from 'react'
import './index.css'
import LoginButton from '../Login/index'
import LogoutButton from '../Logout/index'
import Message from '../Message/index'

class Home extends Component {
  state = {isLoggedIn: false}

  onLogged = () => {
    const {isLoggedIn} = this.state
    if (isLoggedIn === true) {
      this.setState({isLoggedIn: false})
    } else {
      this.setState({isLoggedIn: true})
    }
  }

  displayButton = () => {
    const {isLoggedIn} = this.state
    if (isLoggedIn === true) {
      return <LogoutButton onClick={this.onLogged} />
    }
    return <LoginButton onClick={this.onLogged} />
  }

  render() {
    const {isLoggedIn} = this.state
    let greetMessage = ''
    if (isLoggedIn === true) {
      greetMessage = 'Welcome User'
    } else {
      greetMessage = 'Please Login'
    }
    return (
      <div className="bg-container">
        <div className="ui-card">
          <Message message={greetMessage} />
          {this.displayButton()}
        </div>
      </div>
    )
  }
}

export default Home
