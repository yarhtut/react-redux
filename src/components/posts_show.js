import React, { Component } from 'react';

class PostsShow extends Component {
	render() {
		return(
			<div>
				Show Post {this.props.params.id}
			</div>
		)
	}
}

export default PostsShow;