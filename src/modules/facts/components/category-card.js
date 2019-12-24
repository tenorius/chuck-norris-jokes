import React from 'react';
import styled from 'styled-components';
import Text from '../../core/components/Text';
import { useHistory } from 'react-router-dom';

const Root = styled.div`
  width: 23%;
  height: 60px;
  border-radius: 4px;
  background-color: white;
  padding: 16px;
  margin-bottom: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function CategoryCard({ type }) {
  const history = useHistory();

  return (
    <Root
      onClick={() => history.push(`/${type}`)}
      role="button"
      aria-pressed="false"
    >
      <Text variant={'body2'} color={'orange'} weight={700}>
        {type}
      </Text>
    </Root>
  );
}

export default CategoryCard;
