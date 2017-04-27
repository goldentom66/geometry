import { combineReducers } from 'redux'
import userReducer from './userReducer'
import subtopicReducer from './subtopicReducer'
import topicReducer from './topicReducer'

const rootReducer = combineReducers({
  user: userReducer,
  subtopics: subtopicReducer,
  topic: topicReducer
})

export default rootReducer
