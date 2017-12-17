import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { renderRoutes } from 'react-router-config';

const AppWrapper = styled.div`
  font-family: Helvetica;
`;

const App = ({ route }) => (
  <AppWrapper>
    {renderRoutes(route.routes)}
  </AppWrapper>
);

App.propTypes = {
  route: PropTypes.shape({
    routes: PropTypes.array,
  }).isRequired,
};

export default {
  component: App,
};
