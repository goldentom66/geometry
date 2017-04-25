import React, { Component } from 'react'



class User extends Component {

	render() {
		return (
			<div className='user'>
        <img src='' title={this.props.user.username}/>
        <div className={this.props.user.hasUpdate ? 'udpated' : ''}></div>
      </div>
		)
	}
}

export default User