import React, { Component } from 'react'

class Topic extends Component {

	render() {
		return (
			<div className='topic'>{this.props.topic.title}</div>
		)
	}
}

export default Topic