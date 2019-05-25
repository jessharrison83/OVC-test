import styled from 'styled-components';

export const Tbl = styled.table `
  @import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");
  font-family: 'Montserrat', sans-serif;
  border-collapse: collapse;
  width: 100%;
  margin-top: 20%;
  box-shadow: 3px 5px 10px #EDEEEF;
  
  
`
export const Heading = styled.th `
  border: 1px solid #ECF3F9;
  text-align: left;
  padding: 8px;
`
export const Data = styled.td `
  border: 1px solid #ECF3F9;
  text-align: left;
  padding: 8px;
`

export const Row = styled.tr `
  &:nth-child(even) {
    background-color: #ECF3F9;
    box-shadow: 1px 2px 2px #EDEEEF;
  }
  &:hover {
    &:not(:first-child){
    color: #ECF3F9;
    background-color: #43627D;
    cursor: pointer;
  }
  }

`