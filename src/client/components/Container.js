import styled from 'styled-components';
import {
  setVerticalAlign,
  setTextAlign,
  setPadding,
  setMargin,
  noMargin,
} from '../themes/utils';

const Container = styled.div`
  font-family: ${props => props.theme.fontFamily};
  color: ${props => props.theme.color};

  ${setMargin}
  ${setPadding}
  ${setVerticalAlign}
  ${setTextAlign}
  ${noMargin}
`;

export default Container;
