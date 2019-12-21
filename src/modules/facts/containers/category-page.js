import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router';
import { useAsync } from 'react-async';
import { getRandomCategoryJoke } from '../api/chuck-norris-api';
import Text from '../../core/components/Text';
import FactCard from '../components/fact-card';

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
          <FactCard text={data.value} />
        </>
      )}
      {isPending && 'loading...'}
      {isRejected && 'error'}
      <Styled.Button disabled={isPending} onClick={() => run({ category })}>
        LOAD NEXT
      </Styled.Button>
    </Styled.Root>
  );
};

export default CategoryPage;
