import React, { Component } from 'react';
import { connect } from "react-redux";
import { Tbl, Heading, Data, Row } from '../styles';
import { fetchUsers } from '../actions';

class Table extends Component {

componentDidMount() {
  this.props.fetchUsers();
}

  render() {
    return (
      <Tbl>
        <Row>
          <Heading>Name</Heading>
          <Heading>Email</Heading>
          <Heading>City</Heading>
          <Heading>Company</Heading>
        </Row>
        {this.props.users.map(user => {
        return (
        <Row>
          <Data>{user.name}</Data>
          <Data>{user.email}</Data>
          <Data>{user.address.city}</Data>
          <Data>{user.company.name}</Data>
        </Row>
        )
})}
</Tbl>
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