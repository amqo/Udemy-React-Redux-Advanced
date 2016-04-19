import React, { Component } from 'react';

export default class CommentBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      comment : ''
    };
  }

  render() {
    return (
      <form onSubmit={ this.onHandleSubmit.bind(this) } className="comment-box">
        <textarea
          value={ this.state.comment }
          onChange={ this.onHandleChange.bind(this) } />
        <button action="submit">Submit comment</button>
      </form>
    );
  }

  onHandleSubmit(event) {
    event.preventDefault();
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
