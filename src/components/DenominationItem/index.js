// Write your code here
import './index.css'

const DenominatorItem = props => {
  const {denominationDetails, updateBal} = props
  const {value} = denominationDetails

  const onClickDenomination = () => {
    updateBal(value)
  }

  return (
    <li className="denominator-item">
      <button type="button" className="button" onClick={onClickDenomination}>
        {value}
      </button>
    </li>
  )
}
export default DenominatorItem
