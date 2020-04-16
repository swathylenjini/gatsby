import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducers from './src/redux/reducer'
import { generateRandomValues } from './src/utils/randomDataGenerator'

const initialState = {
  pieData: generateRandomValues(),
}

export default ({ element }) => {
  const store = createStore(rootReducers, initialState)
  return <Provider store={store}>{element}</Provider>
}
