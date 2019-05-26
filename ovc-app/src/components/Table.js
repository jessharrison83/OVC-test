import React, { Component } from 'react';
import { connect } from "react-redux";
import { Tbl, Heading, Data, Row, Loader } from '../styles';
import { fetchUsers } from '../actions';

class Table extends Component {

componentDidMount() {
  this.props.fetchUsers();
}

  render() {
    if (this.props.loading) {
      return (
        <Loader>Fetching users... </Loader>
      )
    } else if (this.props.error) {
      return (
        <Loader>Oops! Cannot find users. :(</Loader>
      )
    } else {
      return (
        <Tbl>
          <tbody>
          <Row>
            <Heading data-testid="name">Name</Heading>
            <Heading>Email</Heading>
            <Heading>City</Heading>
            <Heading>Company</Heading>
          </Row>
          {this.props.users.map(user => {
          return (
          <Row className="dataRows" key={user.id}>
            <Data>{user.name}</Data>
            <Data>{user.email}</Data>
            <Data>{user.address.city}</Data>
            <Data>{user.company.name}</Data>
          </Row>
          )
        })}
          </tbody>
        </Tbl>
  )
    }

    
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