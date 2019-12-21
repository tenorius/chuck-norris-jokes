import React from 'react';
import styled from 'styled-components';
import CategoryCard from './category-card';

const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: bisque;
  padding: 16px;
  margin: 0 -16px;
`;

function CategoryList({ categories }) {
  return (
    <Root>
      {categories.map(category => (
        <CategoryCard key={category} type={category} />
      ))}
    </Root>
  );
}

export default CategoryList;
