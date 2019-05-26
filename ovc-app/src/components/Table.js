import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tbl, Loader } from '../styles';
import { fetchUsers } from '../actions';
import DataRows from './Rows/DataRows';
import HeadingRows from './Rows/HeadingRows';

class Table extends Component {
  state = {
    headings: ['Name', 'Email', 'City', 'Company']
  };
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    if (this.props.loading) {
      return <Loader>Fetching users... </Loader>;
    } else if (this.props.error) {
      return <Loader>`Oops! Cannot find users. :(`</Loader>;
    } else {
      return (
        <Tbl>
          <tbody>
            <HeadingRows headings={this.state.headings} />
            <DataRows users={this.props.users} />
          </tbody>
        </Tbl>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    users: state.tableReducer.users,
    loading: state.tableReducer.loading,
    error: state.tableReducer.error
  };
};

export default connect(
  mapStateToProps,
  { fetchUsers }
)(Table);
