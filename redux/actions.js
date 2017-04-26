let actions = {
  
  selectSubtopic: function(subtopic) {
    return {
      type: 'SELECT_SUBTOPIC',
      subtopic: subtopic
    }
  },
  
  completeSubtopic : function(subtopic) {
    return {
      type: 'COMPLETE_SUBTOPIC',
      subtopic: subtopic
    }
  }
  
}

export default actions
