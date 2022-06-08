import styled from 'styled-components'

export const CharactersListContainer = styled.div`
  display: grid;
     /* grid-template-columns: repeat(5, 1fr);   EASY WAY, not responsive */
    grid-template-columns: repeat(auto-fit, 225px); /* 225 is the width of the image */
    max-width: 1185px;  
    gap: 3.75px; /* for 15 pixels between collumns */
    align-items: center;
    justify-content: center;
    margin: 50px auto 0;
`;

export const ErrorMessage = styled.p`
  background-color: red;
  color: white;
  padding: 10px 30px;
  font-weight: 700;
  border: 2px solid white;
`;