import React, { Component } from 'react'

import SubtopicListItem from './SubtopicListItem'

class SubtopicList extends Component {

	render() {
		return (
      <ul className='subtopic-list'>
        {
          this.props.subtopics.map((subtopic) => {
              let selected = false;
              if (this.props.currentSubtopic && subtopic.index === this.props.currentSubtopic.index) {
                selected = true;
              }
              return <SubtopicListItem key={subtopic.index} subtopic={subtopic} selected={selected} actions={this.props.actions} />
          })
        }
      </ul>
		)
	}
}

export default SubtopicList