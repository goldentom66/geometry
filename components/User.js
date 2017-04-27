import React, { Component } from 'react'



class User extends Component {
	render() {
    const userAvatar = 'images/' + this.props.user.avatar
    
		return (
			<div className='user'>
        <img src={userAvatar} title={this.props.user.username} alt='User Avatar' />
        <div className={this.props.user.hasUpdate ? 'updated' : ''}></div>
      </div>
		)
	}
}

export default User