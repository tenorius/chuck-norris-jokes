import React from 'react';
import styled from 'styled-components';
import Text from '../../core/components/Text';
import StarIcon from '@material-ui/icons/Star';
import { useFavouriteJoke } from '../contexts/favourite-joke-context';

const Styled = {
  FavContainer: styled.div`
    position: relative;
    margin: 42px -16px;
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
    min-height: 200px;
    display: block;
    margin: 0 auto;
    position: relative;
    padding: 16px;
  `
};
const FavoriteJokeCard = () => {
  const favoritedJoke = useFavouriteJoke();

  return (
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
        <Text variant={'body2'} color={'orange'} align={'center'}>
          {favoritedJoke ? favoritedJoke.text : 'empty'}
        </Text>
      </Styled.Card>
    </Styled.FavContainer>
  );
};

export default FavoriteJokeCard;
