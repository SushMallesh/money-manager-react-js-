import {Component} from 'react'
import MoneyDetails from '../MoneyDetails'
import './index.css'

const moneyDetails = [
  {
    id: 'BALANCE',
    moneyType: 'Your Balance',
    iconUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png',
    iconAltText: 'balance',
    className: 'card-1',
  },
  {
    id: 'INCOME',
    moneyType: 'Your Income',
    iconUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png',
    iconAltText: 'income',
    className: 'card-2',
  },
  {
    id: 'EXPENCES',
    moneyType: 'Your Expences',
    iconUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png ',
    iconAltText: 'expences',
    className: 'card-3',
  },
]

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  renderTransactionOptions = eachOption => {
    const {displayText, optionId} = eachOption
    return (
      <option value={displayText} id={optionId}>
        {displayText}
      </option>
    )
  }

  render() {
    return (
      <div className="app-container">
        <div className="money-manager-container">
          <div className="welcome-message-container">
            <h1 className="name">Hi, Richard</h1>
            <p className="welcome">
              Welcome back to your
              <span className="money-manager"> Money Manager</span>
            </p>
          </div>
          <ul className="money-details-list">
            {moneyDetails.map(eachMoneyDetails => (
              <MoneyDetails
                eachMoneyDetails={eachMoneyDetails}
                key={eachMoneyDetails.id}
              />
            ))}
          </ul>
          <div className="transaction-history-container">
            <div className="add-transaction-container">
              <h1 className="heading">Add Transaction</h1>
              <form className="transaction-form">
                <label className="input-label" htmlFor="titleId">
                  TITLE
                </label>
                <input
                  onChange={this.onChangeTitle}
                  className="input"
                  placeholder="TITLE"
                  id="titleId"
                  type="text"
                />
                <br />
                <label className="input-label" htmlFor="amountId">
                  AMOUNT
                </label>
                <input
                  onChange={this.onChangeAmount}
                  className="input"
                  id="amountId"
                  type="text"
                  placeholder="AMOUNT"
                />
                <br />
                <label className="input-label" htmlFor="optionsId">
                  TYPE
                </label>
                <select className="input" id="optionsId">
                  {transactionTypeOptions.map(eachOption =>
                    this.renderTransactionOptions(eachOption),
                  )}
                </select>
                <button type="submit" className="add-button">
                  Add
                </button>
              </form>
            </div>
            <div className="history-container">
              <h1 className="heading">History</h1>
              <ul className="history-list">
                <li>{}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
