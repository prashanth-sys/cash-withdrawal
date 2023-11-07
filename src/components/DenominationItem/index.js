import './index.css'

const DenominationItem = props => {
  const {withdrawalList} = props
  const {id, value} = withdrawalList

  const onDecrement = () => {
    onDecrementAmount(id)
  }

  return (
    <li className="withdrawl-list">
      <button className="button" type="button" onClick={onDecrement}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
