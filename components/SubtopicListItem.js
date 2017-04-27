import React, { Component } from 'react'



class SubtopicListItem extends Component {
  handleSelect() {
    this.props.actions.selectSubtopic(this.props.subtopic.index)
  }
  
	render() {
    const itemClassName = 'item' 
      + (this.props.subtopic.index === this.props.currentSubtopic.index ? ' current' : '') 
      + (this.props.subtopic.completed ? ' completed' : '')
    
		return (
			<li className={itemClassName} onClick={this.handleSelect.bind(this)} title={this.props.subtopic.title}>
          {this.props.subtopic.index}
      </li>
		)
	}
}

export default SubtopicListItem