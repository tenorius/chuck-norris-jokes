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
    height: 200px;
    width: 200px;
    padding: 20px;
    margin: 0 auto;
    background: radial-gradient(yellow, transparent);
    border-radius: 50%;
    img {
      height: 100%;
      width: auto;
    }
  `,
  Text: styled(Text)`
    && {
      font-size: 4rem;
    }
    font-style: italic;
  `
};

function MainLogo() {
  return (
    <Styled.Root>
      <Styled.Image>
        <img src={chuckImage} />
      </Styled.Image>
      <Styled.Text variant={'h1'} color={'white'} align={'center'}>
        Chuck Norris Facts
      </Styled.Text>
    </Styled.Root>
  );
}

export default MainLogo;
