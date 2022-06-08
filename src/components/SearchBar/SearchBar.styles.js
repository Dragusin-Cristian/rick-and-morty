import styled from 'styled-components';

export const SearchForm = styled.form`
  width: 100%;
  /* margin: 0 auto 10px; */
  /* display: flex;
  justify-content: center;
  align-items: center; */
  text-align: center;
  height: 50px;
  font-family: 'Courier Prime', monospace;
  font-weight: bold;
`;

export const InputContainer = styled.div`
  width: fit-content;
  margin: 0 auto 10px;
  display: flex;
  justify-content: space-between; 
  height: 50px;
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid grey; 
`;

export const SearchInput = styled.input`
    font-family: 'Courier Prime', monospace;
    font-weight: bold;
    width: 40vw;
    max-width: 350px;
    height: 50px;
    padding: 5px 20px;
    box-sizing: border-box;
    color: white;
    text-align: center;
    background-color: transparent;
    border: none;


    -webkit-transition: max-width 0.25s ease-in-out, width 0.25s ease-in-out;
    transition: max-width 0.25s ease-in-out, width 0.25s ease-in-out;

    &::placeholder{
      color: lightgrey;
      opacity: 1;
      -webkit-transition: opacity 0.25s ease-in-out;
      transition: opacity 0.25s ease-in-out;
    }

    &:focus{
      width: 50vw;
      max-width: 400px;

      &::placeholder{
        opacity: 0;
      }
    }
`;

export const StatusInput = styled.select`
  font-family: 'Courier Prime', monospace;
  font-weight: bold;
  background-color: transparent;
  color: black;
  border: none;
  background-color: white;
`;

export const Option = styled.option`
  background-color: white;
`; 