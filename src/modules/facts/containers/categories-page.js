import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAsync } from 'react-async';
import { getCategories } from '../api/chuck-norris-api';
import CategoryList from '../components/category-list';
import { useStoredCategories } from '../contexts/stored-categories-context';
import FavoriteJokeCard from '../components/favorite-joke-card';
import LoadingInline from '../../core/components/loading-inline';

const Root = styled.div``;

function CategoriesPage() {
  // deferFn carrega uma funcao asincrona e a trasnforma em uma funcao chamada run para uso posterior
  const { isPending, isResolved, isRejected, data, run, setData } = useAsync({
    deferFn: getCategories
  });
  const { categories, setCategories } = useStoredCategories();

  useEffect(() => {
    // se nao foi feito fetch de nenhuma categoria, fazer o fetch
    if (!categories.length) {
      run();
    } else {
      // ja existe categorias carregadas, leia do context
      setData(categories);
    }
  }, [categories, run, setData]);

  useEffect(() => {
    // effect de sucesso no fetch
    if (isResolved && data) {
      setCategories(data);
    }
  }, [isResolved, data, setCategories]);

  return (
    <Root>
      {isPending && <LoadingInline text={'Loading'} />}
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
