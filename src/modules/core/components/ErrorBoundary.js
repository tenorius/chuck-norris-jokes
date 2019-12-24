import React from 'react';
import styled from 'styled-components';

const Root = styled.p`
  color: red;
  text-align: center;
`;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <Root>Loading failed! Please reload.</Root>;
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
