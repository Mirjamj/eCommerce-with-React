import { Provider } from 'react-redux'
import { store } from '../../store'

// Providers component: Wraps the application with Redux Provider to give components access to the Redux store
const Providers = ({ children }) => {
  return (
    <>
      {/* The Provider component from react-redux makes the Redux store available to all nested components */}
      <Provider store={store}>
        {children} {/* The children components will now have access to the Redux store */}
      </Provider>
    </>
  )
}

export default Providers