import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';


class PostsIndex extends Component {

	componentWillMount() {
		this.props.fetchPosts();
		//console.log('this will render first time ');
	}

	renderPosts() {
		return this.props.posts.map((posts) => {
			return(
				<li className="list-group-item" key={post.id}>
				<Link to={"posts/" + post.id}>
					<span className="pull-xs-right">{post.categories}</span>
					<strong>{post.title}</string>
				</Link>
				</li>
			);
		});
	}

	render() {
		return (
			<div className="container"> 
				<div className="text-xs-right">
					<Link to="/posts/new" className="btn btn-primary">
						Create New Post
					</Link>
				</div>
				<h3>Posts</h3>
				<ul className="list-group">
					{this.renderPosts()}
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { posts: state.posts.all }
}

// function mapDispatchToProps(state) {
// 	return bindActionCreators({ fetchPosts }, dispatch);
// }

export default connect (null, { fetchPosts: fetchPosts }) (PostsIndex);