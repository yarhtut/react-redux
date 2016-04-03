import React, { Component , PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router';

class PostsShow extends Component {
	static contextTypes = {
		router: PropTypes.object
	};

	componentWillMount() {
		this.props.fetchPost(this.props.params.id)
	}

	onDeleteClick() {
			this.porps.deletePost(this.props.params.id)
			.then(() => function {
				this.content.router.push('/');
			});
	}

	render() {

		const {post} = this.props;

		if(!this.props.post) {
			return<div>Loading....</div>
		}

		return(
			<div>
				<Link to="/" className="btn btn-default">Back to Index<Link>
				<button
				 onClick={this.onDeleteClick.bind(this)} 
				className="btn btn-danger pull-xs-right">
					Delete Post
				</button>
				<h3>{post.title}</h3>
				<h6>{post.categories}</h6>
				<p>{post.content}</p>
				Show Post {this.props.params.id}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return { post: state.posts.post }
}

export default connect(null, { fetchPost , deletePost })(PostsShow);