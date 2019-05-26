import React from 'react';
import { Row, Data } from '../../styles';

const DataRows = props => {
  return props.users.map(user => {
    return (
      <Row className="dataRows" key={user.id}>
        <Data>{user.name}</Data>
        <Data>{user.email}</Data>
        <Data>{user.address.city}</Data>
        <Data>{user.company.name}</Data>
      </Row>
    );
  });
};

export default DataRows;
