// Write your code here
// Write your code here
import {Component} from 'react'

import './index.css'

import CashWithdrawal from '../CashWithdrawal'

class DenominationItem extends Component {
  state = {amount: denominationsList}

  onDecrement = id => {
    const {amount} = this.state
    this.setState(prevState => {
      return {amount: prevState.amount - amount}
    })
  }

  render() {
    const {amount} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="profile-container">
            <img
              src="https://assets.ccbp.in/frontend/intermediate-rwd/user-profile-img.png"
              alt="shiva"
              className="image"
            />
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <p className="balance">Your Balance</p>
            <p className="amount">2000</p>
          </div>
          <p className="your-balance">In Rupees</p>
        </div>
      </div>
    )
  }
}
export default DenominationItem
