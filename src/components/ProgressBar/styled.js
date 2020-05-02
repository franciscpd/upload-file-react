import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 7px;
  width: 100%;
  position: relative;
`;

const BaseBox = styled.div`
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 3px;
  transition: width 0s ease-in-out;
`;

export const Background = styled(BaseBox)`
  background: grey;
  width: 100%;
`;

export const Progress = styled(BaseBox)`
  background: blue;
  // @ts-ignore
  width: ${(props) => props.percent}%;
`;
