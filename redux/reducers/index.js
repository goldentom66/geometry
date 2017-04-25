import { combineReducers } from 'redux'
import userReducer from './userReducer'
import subtopicsReducer from './subtopicsReducer'
import subtopicSelectReducer from './subtopicSelectReducer'
import topicReducer from './topicReducer'

const rootReducer = combineReducers({
  user: userReducer,
  subtopics: subtopicsReducer,
  currentSubtopic: subtopicSelectReducer,
  topic: topicReducer
})

export default rootReducer
