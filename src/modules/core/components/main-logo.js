import React from 'react';
import styled from 'styled-components';
import chuckImage from '../../facts/assets/chuck_norris_PNG1.png';
import Text from './Text';

const Styled = {
  Root: styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-bottom: 32px;
  `,
  Image: styled.div`
    height: 100px;
    width: 100px;
    margin: 0 auto;
    img {
      height: 100%;
      width: auto;
    }
  `,
  Text: styled.h1`
    color: white;
  `
};

function MainLogo() {
  return (
    <Styled.Root>
      <Styled.Image>
        <img src={chuckImage} />
      </Styled.Image>
      <Text variant={'h1'} color={'white'} align={'center'}>
        Chuck Norris Facts
      </Text>
    </Styled.Root>
  );
}

export default MainLogo;
