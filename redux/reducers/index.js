import { combineReducers } from 'redux'
import userReducer from './userReducer'
import subtopicsReducer from './subtopicsReducer'
import subtopicReducer from './subtopicReducer'
import topicReducer from './topicReducer'

const rootReducer = combineReducers({
  user: userReducer,
  subtopics: subtopicsReducer,
  currentSubtopic: subtopicReducer,
  topic: topicReducer
})

export default rootReducer
