import './index.css'

const TabItems = props => {
  const {tabItem, tabClick} = props

  const {displayText, tabId} = tabItem
  const tabIdSelect = () => {
    tabClick(tabId)
  }

  return (
    <li className="each-tab-Item">
      <button type="button" onClick={tabIdSelect}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItems
