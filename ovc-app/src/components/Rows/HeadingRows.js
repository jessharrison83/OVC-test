import React from 'react';
import { Heading, Row } from '../../styles';

const HeadingRows = props => {
  return (
    <Row>
      {props.headings.map(heading => {
        return <Heading>{heading}</Heading>;
      })}
    </Row>
  );
};

export default HeadingRows;
