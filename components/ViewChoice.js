import React, { Component } from 'react'



class ViewChoice extends Component {

	render() {
		return (
			<div className='view-choice'>
        <div className='task'><img src='../images/tick.png' /></div>
        <div className='pie'><img src='images/piechart.png' /></div>
        <div className='bar'><img src='images/linegraph.png' /></div>
      </div>
		)
	}
}

export default ViewChoice