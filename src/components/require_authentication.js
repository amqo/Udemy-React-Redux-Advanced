import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
  class Authentication extends Component {
    static contextTypes = {
      router: React.PropTypes.object
    }

    checkIfAuthenticated(props) {
      if (!props.authenticated) {
        this.context.router.push('/');
      }
    }
    componentWillMount() {
      this.checkIfAuthenticated(this.props);
    }
    componentWillUpdate(nextProps) {
      this.checkIfAuthenticated(nextProps);
    }

    render() {
      return <ComposedComponent { ...this.props }/>
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.authenticated };
  }

  return connect(mapStateToProps)(Authentication);
}
