import { Provider } from 'react-redux'
import './App.css'
import Body from './Components/Body'
import appStore from './Utils/appStore'

function App () {
  return (
    <div className='App w-full'>
      <Provider store={appStore}>
        <Body />
      </Provider>
    </div>
  )
}

export default App
