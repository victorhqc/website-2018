import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { renderRoutes } from 'react-router-config';
import LightTheme from './themes/Light';

const Wrapper = styled.div`
  font-family: ${props => props.theme.fontFamily};
  color: ${props => props.theme.color};
  padding: 0;
  margin: 0;
`;

const App = ({ route }) => (
  <LightTheme>
    <Wrapper>
      {renderRoutes(route.routes)}
    </Wrapper>
  </LightTheme>
);

App.propTypes = {
  route: PropTypes.shape({
    routes: PropTypes.array,
  }).isRequired,
};

export default {
  component: App,
};
