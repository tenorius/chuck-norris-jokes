import React from 'react';
import styled from 'styled-components';
import { useAsync } from 'react-async';
import { getCategories } from '../api/chuck-norris-api';
import CategoryList from '../components/category-list';

const Root = styled.div``;

function CategoriesPage() {
  const { isPending, isResolved, isRejected, data } = useAsync({
    promiseFn: getCategories
  });
  return (
    <Root>
      {isPending && <div>loading...</div>}
      {isResolved && <CategoryList categories={data} />}
      {isRejected && <div> error... </div>}
    </Root>
  );
}

export default CategoriesPage;
