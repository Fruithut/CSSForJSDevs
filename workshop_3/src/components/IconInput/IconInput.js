import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    height: 24,
    fontSize: (14 / 16),
    iconSize: 16,
    borderThickness: 1,

  },
  large: {
    height: 36,
    fontSize: (18 / 16),
    iconSize: 24,
    borderThickness: 2,
  }
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const style = SIZES[size];
  style["width"] = width;

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <PositionedIcon id={icon} size={style.iconSize}></PositionedIcon>
      <InputWrapper type="text" placeholder={placeholder} style={{
        '--height': `${style.height}px`,
        '--width': `${style.width}px`,
        '--fontSize': `${style.fontSize}rem`,
        '--borderThickness': `${style.borderThickness}px`,
      }}>
      </InputWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black}
  }
`;

const InputWrapper = styled.input`
  height: var(--height);
  width: var(--width);
  font-size: var(--fontSize);
  border: none;
  color: inherit;
  border-bottom: var(--borderThickness) solid ${COLORS.black};
  outline-offset: 2px;
  padding-left: var(--height);
  font-weight: 700;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500}
  }
`;

const PositionedIcon = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
`;


export default IconInput;
