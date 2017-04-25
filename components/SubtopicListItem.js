import React, { Component } from 'react'



class SubtopicListItem extends Component {
  handleSelect() {
    this.props.actions.selectSubtopic(this.props.subtopic)
  }
  
	render() {
		return (
			<div className={this.props.selected?'selected':''} onClick={this.handleSelect.bind(this)} title={this.props.subtopic.title}>
          {this.props.subtopic.index}
      </div>
		)
	}
}

export default SubtopicListItem