// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const ProgressBar = ({ percent }) => (
  <S.Wrapper>
    <S.Background />
    <S.Progress percent={percent} />
  </S.Wrapper>
);

ProgressBar.propTypes = {
  percent: PropTypes.number.isRequired,
};

export default ProgressBar;
