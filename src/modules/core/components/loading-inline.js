import React, { useEffect, useRef, useState } from 'react';
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

const ellipsisAnimation = (count, text) => {
  let localEllipsisCount;
  if (count === 0) {
    localEllipsisCount = '.';
  } else if (count === 1) {
    localEllipsisCount = '..';
  } else {
    localEllipsisCount = '...';
  }
  return `${text}${localEllipsisCount}`;
};

const LoadingInline = ({ text }) => {
  const [label, setLabel] = useState(text);
  const ellipsisCount = useRef(0);

  useEffect(() => {
    const referece = setInterval(() => {
      setLabel(ellipsisAnimation(ellipsisCount.current, text));
      ellipsisCount.current = (ellipsisCount.current + 1) % 3;
    }, 200);
    return () => clearInterval(referece);
  }, [label, text]);
  return <Root>{label}</Root>;
};

export default LoadingInline;
