import React, { useState } from 'react';

import * as S from './styled';

const FileUpload = () => {
  const [file, setFile] = useState(undefined);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(file);
  };

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <S.Wrapper>
      <S.Form onSubmit={handleSubmit}>
        <S.Input onChange={handleChange} type="file" />
        <S.Button type="submit">Send</S.Button>
      </S.Form>
    </S.Wrapper>
  );
};

export default FileUpload;
