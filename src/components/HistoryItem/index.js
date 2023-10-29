import './index.css'

const HistoryItem = props => {
  const {historyItem, deleteItem} = props
  const {timeAccessed, logoUrl, domainUrl, title, id} = historyItem

  const onDeleteItem = () => {
    deleteItem(id)
  }
  return (
    <li>
      <div className="listItem">
        <p>{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" />
        <p>{title}</p>
        <p>{domainUrl}</p>
      </div>
      <button data-testid="delete" type="button" onClick={onDeleteItem}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default HistoryItem
