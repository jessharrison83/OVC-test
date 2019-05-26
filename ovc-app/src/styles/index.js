import styled from 'styled-components';

export const Tbl = styled.table`
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
  font-family: 'Montserrat', sans-serif;
  border-collapse: collapse;
  width: 100%;
  margin-top: 20%;
  box-shadow: 3px 5px 10px #edeeef;
`;
export const Heading = styled.th`
  border: 1px solid #ecf3f9;
  text-align: left;
  padding: 8px;
`;
export const Data = styled.td`
  border: 1px solid #ecf3f9;
  text-align: left;
  padding: 8px;
`;

export const Row = styled.tr`
  &:nth-child(even) {
    background-color: #ecf3f9;
    box-shadow: 1px 2px 2px #edeeef;
  }
  &:hover {
    &:not(:first-child) {
      color: #ecf3f9;
      background-color: #43627d;
      cursor: pointer;
    }
  }
`;
export const Loader = styled.div`
  color: #43627d;
  font-weight: bold;
  font-size: 1.5rem;
  margin-top: 20%;
`;
