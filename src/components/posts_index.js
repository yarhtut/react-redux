import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';


class PostsIndex extends Component {

	componentWillMount() {
		this.props.fetchPosts();
		//console.log('this will render first time ');
	}

	render() {
		return (
			<div> List of blog Posts</div>
		);
	}
}

// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators({ fetchPosts }, dispatch);
// }

export default connect (null, { fetchPosts: fetchPosts }) (PostsIndex);