let subtopicSelectReducer = function(currentSubtopic = {}, action) {
  switch (action.type) {
    case 'SELECT_SUBTOPIC':
      return action.subtopic;
    default: 
      return currentSubtopic;
  }
}

export default subtopicSelectReducer
