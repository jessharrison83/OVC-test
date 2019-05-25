import React, { Component } from 'react';
import { connect } from "react-redux";

import { fetchUsers } from '../actions';

class Table extends Component {

componentDidMount() {
  this.props.fetchUsers();
}

  render() {
    return (
      this.props.users.map(user => {
        return (<h1>{user.name}</h1>)
})
)
  }   
}

const mapStateToProps = state => {
  return {
    users: state.tableReducer.users,
    loading: state.tableReducer.loading,
    error: state.tableReducer.error
  }
}

export default connect(
  mapStateToProps, 
  { fetchUsers }
)(Table)