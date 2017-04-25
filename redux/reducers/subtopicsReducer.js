let subtopicsReducer = function(subtopics = {}, action) {
  switch (action.type) {
    case 'SELECT_SUBTOPIC':
      return subtopics.map((subtopic) => {
        return subtopics.index === action.index ? 
          Object.assign({}, subtopic, {selected: true}) : Object.assign({}, subtopic, {selected: false})
      })
    default: 
      return subtopics;
  }
}

export default subtopicsReducer
