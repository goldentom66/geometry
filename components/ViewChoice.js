import React, { Component } from 'react'



class ViewChoice extends Component {

	render() {
		return (
			<ul className='view-choice'>
        <li className='active'><img src='../images/tick.png' alt='Tasks' title='Tasks' /></li>
        <li><img src='images/piechart.png' alt='Pie Chart' title='Pie Chart' /></li>
        <li><img src='images/linegraph.png' alt='Line Graph' title='Line Graph' /></li>
      </ul>
		)
	}
}

export default ViewChoice