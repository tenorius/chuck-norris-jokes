import React from 'react';
import styled from 'styled-components';
import Text from '../../core/components/Text';

const Root = styled.div`
  padding: 16px;
  margin: 0 auto 32px;
  background-color: white;
  border-radius: 4px;
  height: 360px;
  width: 280px;
`;

const FactCard = ({ text }) => {
  return (
    <Root>
      <Text color={'orange'} variant={'h4'}>
        {text}
      </Text>
    </Root>
  );
};

export default FactCard;
