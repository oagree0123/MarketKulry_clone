import React from 'react';
import styled from 'styled-components';

const Text = (props) => {
  const { children, is_size, is_color, is_margin, is_padding, _onClick } = props;

  const styles={
    is_size:is_size,
    is_color:is_color,
    is_margin:is_margin,
    is_padding:is_padding

  }

  return (
    <>
      <ElText {...styles} onClick={_onClick}>{children}</ElText>
    </>
  );
};

Text.defaultProps = {
  _onClick: () => {},
  children: null,
  is_bold: false,
  is_size: false,
  is_color: false,
  is_margin: false,
  is_padding: false,
}

const ElText = styled.p`
  ${(props) => (props.is_margin? `margin: ${props.is_margin};` : 'margin: 0;')};
  ${(props) => (props.is_padding? `padding: ${props.is_padding};` : 'padding: 0;')};
  ${(props) => (props.is_size? `font-size: ${props.is_size};` : 'font-size: 16px;')};
  ${(props) => (props.is_color? `color: ${props.is_color};` : '')};
  ${(props) => (props.is_bold? `font-weight: 700;` : 'font-weight: 400')};
`;

export default Text;