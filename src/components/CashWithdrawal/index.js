// Write your code here
import './index.css'

const CashWithdrawal = props => {
  const {denominationsList} = props
  const {value} = denominationsList
  const onDecrement = () => {}

  return (
    <li className="button-item">
      <h1 className="heading">Withdraw</h1>
      <p className="rupees">CHOOSE SUM(IN RUPEES)</p>
      <div>
        <button className="button" type="button" onClick={onDecrement}>
          {value}
        </button>
        <button className="button" type="button">
          {value}
        </button>
        <button className="button" type="button">
          {value}
        </button>
        <button className="button" type="button">
          {value}
        </button>
      </div>
    </li>
  )
}
export default CashWithdrawal
