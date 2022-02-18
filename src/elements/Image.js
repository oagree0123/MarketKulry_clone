import React from 'react';
import styled from 'styled-components';

const Image = (props) => {
  const { src, is_width, is_height, is_margin, is_padding, _onClick } = props;

  const styles = {
    src: src,
  }

  return (
    <ElImageOutter onClick={_onClick}>
      <ElImage {...styles} />
    </ElImageOutter>
  );
};

Image.defaultProps = {
  _onClick: () => {},
  src: "https://media.istockphoto.com/photos/dog-puppy-on-garden-picture-id1142412984?k=20&m=1142412984&s=170667a&w=0&h=VLomTUSZwXDrVauJrpiyMboe0Q7lUYYiMO89sFy2dgY=",
  is_width: false,
  is_height: false,
  is_margin: false,
  is_padding: false,
};

const ElImageOutter = styled.div`

`;

const ElImage = styled.div`
  ${(props) => (props.is_margin? `margin: ${props.is_margin};` : 'margin: 0;')};
  ${(props) => (props.is_padding? `padding: ${props.is_padding};` : 'padding: 0;')};
  ${(props) => (props.is_width? `width: ${props.is_width};` : 'width: 100%;')};
  ${(props) => (props.is_height? `height: ${props.is_height};` : 'height: 100%;')};
  background-image: url("${(props) => props.src}");
`

export default Image;