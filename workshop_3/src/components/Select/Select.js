import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectWrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationSelect>
        {displayedValue}
        <PositionedIcon id="chevron-down" strokeWidth={2} size={24}></PositionedIcon>
      </PresentationSelect>
    </SelectWrapper>
  );
};

const SelectWrapper = styled.div`
  position: relative;
  max-width: fit-content;
`;

const PresentationSelect = styled.div`
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  border: 0;
  border-radius: 8px;
  padding: 12px 52px 12px 16px;
`;

const NativeSelect = styled.select`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;

  &:focus + ${PresentationSelect} {
    outline: 5px auto lightblue;
  }

  &:hover + ${PresentationSelect} {
    color: ${COLORS.black}
  }
`;

const PositionedIcon = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  pointer-events: none;
`;

export default Select;
