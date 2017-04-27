let subtopicReducer = function(subtopics = {}, action) {
  switch (action.type) {
    case 'COMPLETE_SUBTOPIC':
      return subtopics.map((subtopic) => {
        return subtopic.index === action.index 
          ? Object.assign({}, subtopic, {completed: true}) 
          : subtopic;
      });
    default: 
      return subtopics;
  }
}

export default subtopicReducer
