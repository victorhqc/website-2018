import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { renderRoutes } from 'react-router-config';
// import LightTheme from './themes/Light';
import DarkTheme from './themes/Dark';

const Wrapper = styled.div`
  font-family: ${props => props.theme.fontFamily};
  color: ${props => props.theme.color};
  padding: 0;
  margin: 0;
`;

const App = ({ route }) => (
  <DarkTheme>
    <Wrapper>
      {renderRoutes(route.routes)}
    </Wrapper>
  </DarkTheme>
);

App.propTypes = {
  route: PropTypes.shape({
    routes: PropTypes.array,
  }).isRequired,
};

export default {
  component: App,
};
