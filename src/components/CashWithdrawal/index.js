// Write your code here
import './index.css'

import { Component } from 'react'

class CashWithdrawal extends Component {
    state = { count: 2000 }

    onDecrement = () => {
        const { count } = this.state
        const updatedList = this.setState((prevState) => ({ count: prevState: count - count}))
}

render() {
    const { count } = this.state
    const { denominationsList } = this.props
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
                    <p className="amount">{count}</p>
                </div>
                <p className="withdraw-container">In Rupees</p>
                <div className="button-item">
                    <p className="heading">Withdraw</p>
                    <p className="rupees">CHOOSE SUM (IN RUPEES)</p>
                </div>
                <ul className="list-container">
                    {denominationsList.map(eachItem => (
                        <DenominationItem key={eachItem.id} withdrawalList={eachItem} onDecrement={this.onDecrement} />
                    ))}
                </ul>
            </div>
        </div>
    )
}
}

export default CashWithdrawal
