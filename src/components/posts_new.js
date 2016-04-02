import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class PostsNew extends Component {

	render() {
		return (
			<form>
				<h3>Create A New Post</h3>
				<div className="form-group">
					<label>Title</label>
					<input type="text" className="form-contol" />
				</div>

				<div className="form-group">
					<label>Category</label>
					<input type="text" className="form-contol" />
				</div>

				<div className="form-group">
					<label>Content</label>
					<textarea className="form-contol" />
				</div>

				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		);
	}
}

export default reduxForm({
	form: 'PostsNewForm',
	fields: ['title', 'categories', 'content']
}) (PostsNew);


//user types something in .... record it on application state

// state === {
// 	form: {
// 		PostsNewForm: {
// 			title: '...',
// 			categories: '....',
// 			content: '....'
// 		}
// 	}
// }