import styled from 'styled-components';

const Column = styled.div`
  width: ${props => `${props.size * 100}%` || '100%'}
`;

export default Column;
