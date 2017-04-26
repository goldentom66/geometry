import React, { Component } from 'react'

import SubtopicListItem from './SubtopicListItem'

class SubtopicList extends Component {

	render() {
		return (
      <div className='subtopic-list'>
        <div className='left button'><img src='../images/left.png' alt='Left' /></div>
        <div className='list-parent'>
          <ul className='list'>
            {
              this.props.subtopics.map((subtopic) => {
                  let current = false;
                  if (this.props.currentSubtopic && subtopic.index === this.props.currentSubtopic.index) {
                    current = true;
                  }
                  return <SubtopicListItem key={subtopic.index} subtopic={subtopic} current={current} actions={this.props.actions} />
              })
            }
          </ul>
        </div>
        <div className='right button'><img src='../images/right.png' alt='Right' /></div>
      </div>
		)
	}
}

export default SubtopicList