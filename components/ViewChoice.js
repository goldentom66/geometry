import React, { Component } from 'react'



class ViewChoice extends Component {

	render() {
		return (
			<ul className='view-choice'>
        <li className='active'><img src='../images/tick.png' /></li>
        <li><img src='images/piechart.png' /></li>
        <li><img src='images/linegraph.png' /></li>
      </ul>
		)
	}
}

export default ViewChoice