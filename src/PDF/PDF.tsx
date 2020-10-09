import React from 'react';
import resume from '../assets/Devin_Cunningham_Resume_2018.pdf';
import SinglePage from './SinglePage';

export default function PDF() {
  console.log(resume)
  return (
    <SinglePage pdf={resume} />
  );
}