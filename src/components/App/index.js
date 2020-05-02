import { hot } from 'react-hot-loader/root';
import React from 'react';

import FileUpload from '../FileUpload';

import * as S from './styled';

const App = () => {
  return (
    <S.Wrapper>
      <S.VCenter>
        <FileUpload />
      </S.VCenter>
    </S.Wrapper>
  );
};

export default hot(App);
