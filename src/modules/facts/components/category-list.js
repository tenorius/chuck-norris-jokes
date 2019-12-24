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
  @media only screen and (min-width: 960px) {
    margin: 0 auto;
    max-width: 960px;
  }
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
