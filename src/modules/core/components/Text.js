import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const tagMap = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body1: 'p',
  body2: 'p',
  caption: 'span'
};

const Root = styled.div`
  &.typography-h1 {
    font-size: 2rem;
    font-weight: 700;
  }
  &.typography-h2 {
    font-size: 1.75rem;
    font-weight: 700;
  }
  &.typography-h3 {
    font-size: 1.5rem;
    font-weight: 700;
  }
  &.typography-h4 {
    font-size: 1.25rem;
    font-weight: 700;
  }
  &.typography-h5 {
    font-size: 1.125rem;
    font-weight: 700;
  }
  &.typography-h6 {
    font-size: 1rem;
    font-weight: 700;
  }
  &.typography-body1 {
    font-size: 1rem;
    font-weight: 300;
  }
  &.typography-body2 {
    font-size: 0.75rem;
    font-weight: 300;
  }

  margin-bottom: 0;
  margin-top: 0;

  && {
    color: ${props => props.color};
    ${props =>
      props.weight &&
      css`
        font-weight: ${props.weight};
      `};
    text-align: ${props => props.align};
  }
`;

const Text = ({ variant, children, ...props }) => {
  return (
    <Root {...props} as={tagMap[variant]} className={`typography-${variant}`}>
      {children}
    </Root>
  );
};

Text.propTypes = {
  variant: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'body1',
    'body2',
    'caption'
  ]),
  color: PropTypes.string,
  weight: PropTypes.oneOf([300, 500, 700]),
  align: PropTypes.oneOf(['center', 'right', 'left'])
};

Text.defaultProps = {
  variant: 'body1',
  color: 'black',
  align: 'left'
};

export default Text;
