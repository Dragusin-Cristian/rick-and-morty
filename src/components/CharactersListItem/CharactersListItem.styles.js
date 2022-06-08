import styled from 'styled-components';

export const Box = styled.div`
  position: relative;
  margin-bottom: 225px; /* the height of the image */
`;

export const CardContainer = styled.div`
  position: absolute;
`;

export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 90%;
  position: relative;
  margin: auto;
  transition: 0.3s;

  &:hover {
    box-shadow: 0 16px 32px 0 rgba(0,0,0,0.8);
    width: 93%;
  }
`;

export const Avatar = styled.img.attrs((props) => ({
  src: props.source,
  alt: 'Avatar'
}))`
  width: 100%;
`;

export const DataContainer = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0px;
  height: 135px;
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
`;

export const ItemData = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  color: white;
  text-align: center;
`;

export const ItemName = styled.h4`
  margin-bottom: 0px;
`;

export const ItemStatus = styled.p`
  margin: 8px auto;
`

