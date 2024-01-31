// Write your code here
import './index.css'

const LogoutButton = props => {
  const {onClickButton} = props
  const changeState = () => {
    onClickButton()
  }
  return (
    <button type="button" className="button" onClick={changeState()}>
      Logout
    </button>
  )
}
export default LogoutButton
