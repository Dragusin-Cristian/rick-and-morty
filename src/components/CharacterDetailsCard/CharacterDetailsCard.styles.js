import styled from 'styled-components';

export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 90%;
  max-width: 450px;
  position: relative;
  margin: auto;
`;

export const Avatar = styled.img.attrs((props) => ({
  src: props.imageSource,
  alt: 'Avatar'
}))`
  width: 100%;
  height: 300px;
  display: block;
  overflow: hidden;
  object-fit: cover;
`;

export const BlackFade = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0px;
  height: 135px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%);
`;

export const DataContainer = styled.div`
  text-align: start;
  padding: 0 10px;
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const GenderBadgeStyle = styled.div`
  ${({ gender }) => {
    let backgroundColor;

    switch (gender) {
      case 'Male':
        backgroundColor = 'blue'
        break;
      case 'Female':
        backgroundColor = '#FF008A'
        break;
      default:
        backgroundColor = 'grey'
    }

    return 'background-color: ' + backgroundColor + '; border: 1px solid ' + backgroundColor + '; ';
  }};
  border-radius: 20px;
  padding: 2px 10px;
`;

export const EpisodesContainer = styled.div`
  height: 150px;
  overflow-y: scroll;
`;