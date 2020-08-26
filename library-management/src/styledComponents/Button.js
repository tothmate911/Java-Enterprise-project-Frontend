import styled from 'styled-components';

export default styled.button`
  border: none;
  color: #c5c6c7;
  background-color: #0b0c10;
  border: 2px solid #66fcf1;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  &:hover:enabled,
  &:active:enabled,
  &:focus:enabled,
  &:visited:enabled {
    border: 2px solid #45a29e !important;
    color: #45a29e !important;
  }
  &:disabled {
    border: 2px solid #143230;
    color: #3b3b3b;
  }
`;
