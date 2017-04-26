let subtopicReducer = function(subtopic = {}, action) {
  switch (action.type) {
    case 'SELECT_SUBTOPIC':
      return action.subtopic;
    case 'COMPLETE_SUBTOPIC':
      action.subtopic.completed = true;
      return action.subtopic;
    default: 
      return subtopic;
  }
}

export default subtopicReducer
