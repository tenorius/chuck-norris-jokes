import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAsync } from 'react-async';
import { getCategories } from '../api/chuck-norris-api';
import CategoryList from '../components/category-list';
import { useStoredCategories } from '../contexts/stored-categories-context';
import FavoriteJokeCard from '../components/favorite-joke-card';

const Root = styled.div``;

function CategoriesPage() {
  const { isPending, isResolved, isRejected, data, run, setData } = useAsync({
    deferFn: getCategories
  });
  const { categories, setCategories } = useStoredCategories();

  useEffect(() => {
    if (!categories.length) {
      run();
    } else {
      setData(categories);
    }
  }, [categories, run, setData]);

  useEffect(() => {
    if (isResolved && data) {
      setCategories(data);
    }
  }, [isResolved, data, setCategories]);

  return (
    <Root>
      {isPending && <div>loading...</div>}
      {data && (
        <>
          <CategoryList categories={data} />
          <FavoriteJokeCard />
        </>
      )}
      {isRejected && <div> error... </div>}
    </Root>
  );
}

export default CategoriesPage;
