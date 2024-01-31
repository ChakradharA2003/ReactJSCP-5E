// Write your code here
// Write your code here
import './index.css'

const LoginButton = props => {
  const {onClickButton} = props
  const changeState = () => {
    onClickButton()
  }
  return (
    <button type="button" className="button" onClick={changeState()}>
      Login
    </button>
  )
}
export default LoginButton
