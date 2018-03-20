import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import distanceInWords from 'date-fns/distance_in_words';
import distanceInWordsStrict from 'date-fns/distance_in_words_strict';

import LightTheme from '../themes/Light';

import Row from '../components/Row';
import Column from '../components/Column';
import Container from '../components/Container';
import Background from '../components/Background';
import H1 from '../components/H1';
import H2 from '../components/H2';
import P from '../components/P';
import Link from '../components/Link';

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

const HomePage = () => (
  <LightTheme>
    <Fragment>
      <Helmet>
        <title>Victor Quiroz Castro - Software Engineer</title>
        <meta property="og:site_name" content="victorhqc" />
        <meta
          property="og:title"
          content="Victor Quiroz Castro - Software Engineer"
        />
        <meta property="og:url" content="http://victorhqc.com" />
        <meta property="og:type" content="website" />
        <meta property="og:author" content="https://github.com/victorhqc" />
        <meta property="og:image" content={berlinImage} />
        <meta property="og:image:width" content="754" />
        <meta property="og:image:height" content="566" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@victorhqc" />
        <meta property="twitter:creator" content="https://github.com/victorhqc" />
        <meta property="twitter:title" content="victorhqc" />
        <meta property="twitter:description" content="Victor Quiroz Castro - Software Engineer" />
        <meta property="twitter:image:src" content={berlinImage} />

        <meta
          name="description"
          content={`Web Developer with ${yearsOfExperience} of experience`}
        />
        <meta
          name="keywords"
          content="developer, engineer, software engineer"
        />
      </Helmet>
      <Background src={berlinImage} />
      <Container verticalAlign>
        <Row>
          <Column>
            <H1>Victor Quiroz Castro</H1>
            <H2 noMargin>
              Software engineer
            </H2>
            <H2>
              <Link href="https://github.com/victorhqc">@victorhqc</Link>
            </H2>
          </Column>
          <Column>
            <Container
              noMargin
              textAlign="left"
              padding={{
                top: 0,
                bottom: 0,
                right: 20,
                left: 20,
              }}
            >
              <H1>About me</H1>
              <P lead>
                {`
                  I'm a Web Developer with ${yearsOfExperience} of experience with JavaScript
                  and Web Technologies.
                `}
              </P>
              <P lead>
                {`
                  I've been using React.js and Redux (${yearsOfReact} now)
                  with Functional Programming.
                `}
              </P>
            </Container>
          </Column>
        </Row>
      </Container>
    </Fragment>
  </LightTheme>
);

export default {
  component: HomePage,
};
