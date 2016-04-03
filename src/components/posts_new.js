import React, { Component , PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {
	static contextTypes = {
		router : PropTypes.object
	};

	onSubmit(props) {
		this.props.createPost(props)
			.then(() => {
				//blog post has been created ,navigate the user to the index
				// we navigat by calling this.context.router.push wit hthe 
				// new path to navigate to.

				this.context.router.push('/')
			});
	}

	render() {
		const { fields: {title, categories, content }, handleSubmit } = this.props;
		//const handleSubmit = this.props.handleSubmit;
		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<h3>Create A New Post</h3>

				<div className={`form-group ${title.touched && title.invalid ? 'has-danger' : '' }`}>
					<label>Title</label>
					<input type="text" className="form-control" {...title} />
					<div className="text-help">
						{ title.touched ? title.error : ''}
					</div>
				</div>

				<div className={`form group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
					<label>Category</label>
					<input type="text" className="form-control" {...categories} />
					<div className="text-help">
						{ categories.touched ? categories.error : ''}
					</div>
				</div>

				<div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''} `}>
					<label>Content</label>
					<textarea className="form-control" {...content}/>
					<div className="text-help">
						{ content.touched ? content.error : ''}
					</div>
				</div>

				<button type="submit" className="btn btn-primary">Submit</button>
				<Link to="/" className="btn btn-danger">Cancel</Link>
			</form>
		);
	}
}

function validate(values) {
	const errors = {} ;

	if(!values.title) {
		errors.title = "Enter a Post Title";
	}

	if(!values.categories) {
		errors.categories = 'Enter categories';
	}

	if(!values.content) {
		errors.content = 'Enter Content'
	}
	return errors;
}


// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is fomr config, 2nd is mapStateToProps, 3rd is mapDipatchToProps

export default reduxForm({
	form: 'PostsNewForm',
	fields: ['title', 'categories', 'content'],
	validate
},null, { createPost }) (PostsNew);


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