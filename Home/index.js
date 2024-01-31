// Write your code here
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

  onClickButton = () => {
    this.onLogged()
  }

  displayButton = () => {
    const {isLoggedIn} = this.state
    if (isLoggedIn === true) {
      return <LogoutButton onClickButton={this.onClickButton} />
    }
    return <LoginButton onClickButton={this.onClickButton} />
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
