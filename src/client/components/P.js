import styled from 'styled-components';
import { getFontSize } from '../themes/base';

const fontSize = (props) => {
  if (props.lead) {
    return '20px';
  }

  return `${getFontSize('md')}px`;
};

const P = styled.p`
  font-size: ${fontSize};
  font-weight: 300;
`;

export default P;
