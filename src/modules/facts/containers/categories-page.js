import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAsync } from 'react-async';
import { getCategories } from '../api/chuck-norris-api';
import CategoryList from '../components/category-list';
import StarIcon from '@material-ui/icons/Star';
import Text from '../../core/components/Text';
import { useFavouriteJoke } from '../contexts/favourite-joke-context';
import { useStoredCategories } from '../contexts/stored-categories-context';

const Root = styled.div``;
const Styled = {
  FavContainer: styled.div`
    position: relative;
    margin: 42px -16px;
    background-color: lightsalmon;
  `,
  Star: styled(StarIcon)`
    cursor: pointer;
    position: absolute;

    && {
      font-size: 109px;
      color: gold;
      margin: 0 auto;
      display: block;
      top: 50%;
      left: 50%;
      opacity: 0.3;
      transform: translate(-50%, -50%);
      pointer-events: none;
    }
  `,
  Card: styled.div`
    background-color: white;
    width: 200px;
    min-height: 100px;
    display: block;
    margin: 0 auto;
    position: relative;
    padding: 16px;
  `
};
function CategoriesPage() {
  const { isPending, isResolved, isRejected, data, run, setData } = useAsync({
    deferFn: getCategories
  });
  const favoritedJoke = useFavouriteJoke();
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
      {data && <CategoryList categories={data} />}
      {isRejected && <div> error... </div>}
      <Styled.FavContainer>
        <Styled.Card>
          <Styled.Star />
          <Text
            variant={'h4'}
            color={'orange'}
            align={'center'}
            bottomSpacing={16}
          >
            Favotire Joke:
          </Text>
          <Text variant={'body2'} color={'black'} align={'center'}>
            {favoritedJoke ? favoritedJoke.text : 'empty'}
          </Text>
        </Styled.Card>
      </Styled.FavContainer>
    </Root>
  );
}

export default CategoriesPage;
