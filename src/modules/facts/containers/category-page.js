import React, { Suspense, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useAsync } from 'react-async';
import { getRandomCategoryJoke } from '../api/chuck-norris-api';
import Text from '../../core/components/Text';
import FactCard from '../components/fact-card';
import { useFavouriteJokeDispatch } from '../contexts/favourite-joke-context';
import LoadingInline from '../../core/components/loading-inline';
import ErrorBoundary from '../../core/components/ErrorBoundary';

const Styled = {
  Root: styled.div``,
  Title: styled.div`
    margin: 0 -16px 32px;
    padding: 16px;
    background-color: bisque;
  `,
  Button: styled.button`
    padding: 8px;
    margin: 8px auto;
    background-color: orange;
    color: white;
    display: block;
    font-weight: 700;
    font-size: 18px;
    min-width: 240px;
  `,
  Link: styled(Link)`
    display: block;
    text-align: center;
  `
};

const adaptedGetRandomCategoryJoke = args => getRandomCategoryJoke(...args);
const CategoryPage = () => {
  let { category } = useParams();

  const { isPending, isRejected, isResolved, data, run } = useAsync({
    deferFn: adaptedGetRandomCategoryJoke
  });

  useEffect(() => {
    run({ category });
  }, [category, run]);

  return (
    <Styled.Root>
      <Styled.Title>
        <Text variant={'h2'} weight={700} color={'orange'} align={'center'}>
          {category}
        </Text>
      </Styled.Title>

      {isResolved && (
        <>
          <FactCard text={data.value} id={data.id} />
        </>
      )}
      {isPending && <LoadingInline text={'Loading joke'} />}
      {isRejected && 'error'}
      <Styled.Button disabled={isPending} onClick={() => run({ category })}>
        LOAD NEXT
      </Styled.Button>
      <Styled.Link to={'/'}>Back to home</Styled.Link>
    </Styled.Root>
  );
};

export default CategoryPage;
