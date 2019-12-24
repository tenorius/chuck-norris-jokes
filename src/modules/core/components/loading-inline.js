import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Root = styled.div`
  color: white;
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

let ellipsisCount = 0;
const ellipsisAnimation = text => {
  let localEllipsisCount;
  if (ellipsisCount === 0) {
    localEllipsisCount = '.';
  } else if (ellipsisCount === 1) {
    localEllipsisCount = '..';
  } else {
    localEllipsisCount = '...';
  }
  ellipsisCount = (ellipsisCount + 1) % 3;
  return `${text}${localEllipsisCount}`;
};

const LoadingInline = ({ text }) => {
  const [label, setLabel] = useState(text);
  useEffect(() => {
    const referece = setInterval(() => {
      setLabel(ellipsisAnimation(label));
    }, 200);
    return () => clearInterval(referece);
  }, [label]);
  return <Root>{label}</Root>;
};

export default LoadingInline;
