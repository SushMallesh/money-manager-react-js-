import './index.css'

const MoneyDetails = props => {
  const {eachMoneyDetails} = props

  const {moneyType, iconUrl, iconAltText, className} = eachMoneyDetails
  return (
    <li className={`card-item ${className}`}>
      <img className="icon" src={iconUrl} alt={iconAltText} />
      <div className="money-details-card">
        <h1 className="money-type">{moneyType}</h1>
        <p>Rs 0</p>
      </div>
    </li>
  )
}
export default MoneyDetails
