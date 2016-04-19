import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      comment : ''
    };
  }

  render() {
    return (
      <form onSubmit={ this.onHandleSubmit.bind(this) } className="comment-box">
        <h4>Add a comment</h4>
        <textarea
          value={ this.state.comment }
          onChange={ this.onHandleChange.bind(this) } />
        <div>
          <button action="submit">Submit comment</button>
        </div>
      </form>
    );
  }

  onHandleSubmit(event) {
    event.preventDefault();

    this.props.saveComment(this.state.comment);
    this.setState({
      comment: ''
    });
  }

  onHandleChange(event) {
    this.setState({
      comment: event.target.value
    });
  }
}

export default connect(null, actions)(CommentBox);
