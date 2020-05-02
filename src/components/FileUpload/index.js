import React, { useState, useRef } from 'react';

import api from '@shared/api';
import ProgressBar from '../ProgressBar';

import * as S from './styled';

const FileUpload = () => {
  const [file, setFile] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [percentCompleted, setPercentCompleted] = useState(0);

  const form = useRef();

  const calculatePercent = (value, total) => Math.round((value / total) * 100);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitted(true);

    const data = new FormData();
    data.append('files', file);

    await api
      .post('/upload', data, {
        onUploadProgress: (progressEvent) =>
          setPercentCompleted(
            calculatePercent(progressEvent.loaded, progressEvent.total)
          ),
      })
      .then((r) => r.data);

    setLoading(false);
  };

  const handleChange = (e) => {
    setFile(e.target.files[0]);
    setSubmitted(false);
  };

  return (
    <S.Wrapper>
      <S.Form onSubmit={handleSubmit} ref={form}>
        <S.Input onChange={handleChange} type="file" required />
        <S.Button type="submit">Send</S.Button>
      </S.Form>
      {submitted && <ProgressBar percent={percentCompleted} />}
      {loading && <p>Uploading...</p>}
    </S.Wrapper>
  );
};

export default FileUpload;
