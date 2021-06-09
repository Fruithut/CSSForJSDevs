/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    "--padding": "0px",
    "--borderRadius": "4px",
    "--height": "8px"
  },
  medium: {
    "--padding": "0px",
    "--borderRadius": "4px",
    "--height": "12px"
  },
  large: {
    "--padding": "4px",
    "--borderRadius": "8px",
    "--height": "24px"
  }
}

const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size];

  return (
    <ProgressBarWrapper style={styles} role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100">
      <VisuallyHidden>{value}%</VisuallyHidden>
      <ProgressBarFillWrapper>
        <ProgressBarFill percent={value}></ProgressBarFill>
      </ProgressBarFillWrapper>
    </ProgressBarWrapper>
  );
};

const ProgressBarWrapper = styled.div`
  width: 370px;
  height: var(--height);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--borderRadius);
  padding: var(--padding);
`;

const ProgressBarFillWrapper = styled.div`
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
`;

const ProgressBarFill = styled.div`
  width: ${props => `${props.percent}%`};
  height: 100%;
  background-color: ${COLORS.primary};
`;


export default ProgressBar;
