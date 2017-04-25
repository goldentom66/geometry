let actions = {
  
  selectSubtopic: function(subtopic) {
    return {
      type: 'SELECT_SUBTOPIC',
      subtopic: subtopic
    }
  }
  
}

export default actions
