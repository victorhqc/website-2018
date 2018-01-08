import React from 'react';
import styled from 'styled-components';
import distanceInWords from 'date-fns/distance_in_words';
import distanceInWordsStrict from 'date-fns/distance_in_words_strict';
import Row from '../components/Row';
import Background from '../components/Background';

import berlinImage from '../../assets/berlin_1.jpeg';

const today = new Date();

const yearsOfExperience = distanceInWordsStrict(
  new Date('2010-06-30'),
  today,
);

const yearsOfReact = distanceInWords(
  new Date('2015-11-10'),
  today,
);

const HomePageWrapper = styled.div`
`;

const HomePage = () => (
  <HomePageWrapper>
    <Background src={berlinImage} />
    <Row>
      <div>
        <h1>
          Victor Quiroz Castro
          <br />
          <small>Javascript Fullstack Developer</small>
          <br />
          <small>
            <a href="https://github.com/victorhqc">@victorhqc</a>
          </small>
        </h1>
      </div>
      <div>
        <h1>About me</h1>
        <p>
          {`
            I'm a Web Developer with ${yearsOfExperience} of experience with JavaScript
            and Web Technologies.
          `}
        </p>
        <p>
          {`
            I've been using React.js and Redux (${yearsOfReact} now)
            with Functional Oriented Programming.
          `}
        </p>
      </div>
    </Row>
    <h1>Welcome</h1>
    <p>Check out these awesome features</p>
  </HomePageWrapper>
);

export default {
  component: HomePage,
};
