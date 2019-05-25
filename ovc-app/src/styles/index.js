import styled from 'styled-components';

export const Tbl = styled.table `
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  margin-top: 20%;
`
export const Heading = styled.th `
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`
export const Data = styled.td `
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`

export const Row = styled.tr `
  &:nth-child(even) {
    background-color: #dddddd;
  }
`