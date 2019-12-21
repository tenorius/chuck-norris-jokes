import React from 'react';
import styled from 'styled-components';
import Text from '../../core/components/Text';
import {
  favoriteJokeActions,
  useFavouriteJoke,
  useFavouriteJokeDispatch
} from '../contexts/favourite-joke-context';
import StarIcon from '@material-ui/icons/Star';

const Root = styled.div`
  padding: 16px;
  margin: 0 auto 32px;
  background-color: white;
  border-radius: 4px;
  height: 360px;
  width: 280px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  &:before,
  &:after {
    position: absolute;
    font-size: 58px;
    font-family: cursive;
    color: orange;
  }
  &:before {
    top: 16px;
    left: 16px;
    content: '\\201C';
  }
  &:after {
    bottom: 16px;
    right: 16px;
    content: '\\201D';
  }
`;

const Star = styled(StarIcon)`
  position: absolute;
  right: 16px;
  top: 16px;
  color: ${props => (props.favorite ? 'gold' : 'lightgray')};
  cursor: pointer;
`;

const FactCard = ({ text, id }) => {
  const dispatch = useFavouriteJokeDispatch();
  const favoritedJoke = useFavouriteJoke();

  return (
    <Root>
      <Star
        favorite={favoritedJoke && favoritedJoke.id === id}
        onClick={() => {
          if (favoritedJoke && favoritedJoke.id === id) {
            favoriteJokeActions.clearFavoriteJoke({ dispatch });
          } else {
            favoriteJokeActions.setFavoriteJoke({
              dispatch,
              joke: { text, id }
            });
          }
        }}
      />
      <Text color={'orange'} variant={'h4'}>
        {text}
      </Text>
    </Root>
  );
};

export default FactCard;
