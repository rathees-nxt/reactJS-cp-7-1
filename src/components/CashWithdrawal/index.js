// Write your code here
import {Component} from 'react'
import DenominatorItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  updateBal = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)
    return (
      <div className="app-container">
        <div className="cash-withdraw-container">
          <div className="name-logo-container">
            <div className="logo-container">
              <p className="logo">{initial}</p>
            </div>
            <p className="logo-name">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="bal-heading">Your Balance</p>
            <p className="bal-amount-heading">
              {balance} <br />
              <span className="amount-in-rupees">In Rupees</span>
            </p>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denominator-list">
            {denominationsList.map(eachDenominator => (
              <DenominatorItem
                key={eachDenominator.id}
                denominationDetails={eachDenominator}
                updateBal={this.updateBal}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
